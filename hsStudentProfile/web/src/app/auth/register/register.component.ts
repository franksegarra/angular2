import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {SelectItem} from 'primeng/primeng';

import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user';

@Component({
    selector: 'pp-registerform',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    public pageTitle: string = 'Register';

    roles: SelectItem[];

    form: FormGroup;
    profilename = new FormControl("", Validators.required);
    primaryemail = new FormControl("", Validators.required);
    password = new FormControl("", Validators.required);
    passwordval = new FormControl("", Validators.required);
    selectedrole = new FormControl("", Validators.required);

    loading = false;

    constructor(private fb: FormBuilder,private router: Router,private userService: UserService,private alertService: AlertService) { 
        this.roles = [];
        this.roles.push({label:'Student', value:'student'});
        this.roles.push({label:'Coach', value:'coach'});            
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            "profilename": ["", Validators.required],
            "primaryemail": ["", Validators.required],
            "password": ["", Validators.required],
            "passwordval": ["", Validators.required],
            "selectedrole": ["", Validators.required]
        });
    }

    register() {
        this.loading = true;

        var aUser:User = {
            id: 0,
            profilename: this.form.value['profilename'],
            primaryemail: this.form.value['primaryemail'],
            password: this.form.value['password'],
            roleid: (this.form.value['selectedrole'] == 'student') ? 2 : 3
        };

        this.userService.create(aUser)
            .subscribe(
                (response) => {
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                },
                (err) => {
                        this.alertService.error(err);
                        this.loading = false;
                },
                () => {
                    console.log("Complete");
                }
            );
    }
}
