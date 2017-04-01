import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'pp-forgotpwform',
    moduleId: module.id,
    templateUrl: 'forgotpw.component.html'
})
export class ForgotPWComponent {
    public pageTitle: string = 'Forgot Password';
    
    form: FormGroup;
    email = new FormControl("", Validators.required);

    loading = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }


    ngOnInit(): void {
        this.form = this.fb.group({
            "email": ["", Validators.required],
        });
    }

    onSubmit() {
        this.loading = true;

        this.userService.create(this.form.value['email'])
            .subscribe(
                data => {
                    this.alertService.success('Forgot Password Message', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
