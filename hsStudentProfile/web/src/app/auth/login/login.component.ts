﻿import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'pp-loginform',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    public pageTitle: string = 'Login';

    form: FormGroup;
    profilename = new FormControl("", Validators.required);
    password = new FormControl("", Validators.required);

    loading = false;
    returnUrl: string;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _authService: AuthService,
        private alertService: AlertService) { }

    ngOnInit(): void {
        // reset login status
        this._authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //console.log([this.returnUrl]);

        this.form = this.fb.group({
            "profilename": ["francissegarra", Validators.required],
            "password": ["francissegarra", Validators.required]
        });

        //For dev
        this.login();
    }

    login(): void {
        this.loading = true;
        
        this._authService.login(this.form.value['profilename'], this.form.value['password'])
            .subscribe(
                (result)=> {
                    if (result === true) {
                        if (this._authService.role == 'student') {
                            this.router.navigate(['/' + this._authService.userid]);
                        }
                        else {
                            console.log('Error loggin in');
                            this.router.navigate([this.returnUrl]);
                        }
                    } else {
                        this.alertService.error('Username or password is incorrect');
                        this.loading = false;
                    }
                },
                (err) => {
                    this.alertService.error('Username or password is incorrect', true);
                },
                () => {
                    console.log("Complete");
                }
            );
    }
}
