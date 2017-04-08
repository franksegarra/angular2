import { Component, OnInit } from '@angular/core';
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
        private authService: AuthService,
        private alertService: AlertService) { }

    ngOnInit(): void {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log([this.returnUrl]);

        this.form = this.fb.group({
            "profilename": ["francissegarra", Validators.required],
            "password": ["", Validators.required]
        });
    }

    login(): void {
        this.loading = true;
        this.authService.login(this.form.value['profilename'], this.form.value['password'])
            .subscribe(
                (result)=> {
                    if (result === true) {
                        if (this.authService.role == 'student') {
                            this.router.navigate(['/' + this.authService.userid]);
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
