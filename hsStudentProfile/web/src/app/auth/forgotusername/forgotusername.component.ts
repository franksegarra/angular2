import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'pp-forgotusernameform',
    moduleId: module.id,
    templateUrl: 'forgotusername.component.html'
})
export class ForgotUserNameComponent {
    public pageTitle: string = 'Forgot User Name';
    
    form: FormGroup;
    primaryemail = new FormControl("", Validators.required);

    loading = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }


    ngOnInit(): void {
        this.form = this.fb.group({
            "primaryemail": ["", Validators.required]
        });
    }

    onSubmit() {
        this.loading = true;

        this.userService.create(this.form.value['primaryemail'])
            .subscribe(
                data => {
                    this.alertService.success('Forgot user name message', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
