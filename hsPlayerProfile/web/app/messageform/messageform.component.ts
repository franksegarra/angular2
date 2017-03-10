import { Component, Input, OnInit } from '@angular/core';
import { IReCAPTCHA } from '../models/IReCAPTCHA';
import { IreCaptchaResponse } from '../models/IreCaptchaResponse';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-messageform',
    moduleId: module.id,
    templateUrl: 'messageform.component.html'
})
export class MessageFormComponent implements OnInit { 

    form: FormGroup;
    contactname = new FormControl("", Validators.required);
    contactphone = new FormControl("");
    contactemail = new FormControl("", Validators.required);
    message = new FormControl("", Validators.required);

    display: boolean = false;
    dialogContent: string = '';

    grecaptcha: IReCAPTCHA;
    reCaptchaValid: boolean = false;

    constructor(private fb: FormBuilder, private _dataService: DataService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "contactname": ["", Validators.required],
            "contactphone": [""],
            "contactemail": ["", Validators.required],
            "message": ["", Validators.required]
        });
    }

    onSubmit(): void { 
        //Call parent onsubmit
    }

    showResponse(event:any) {
        this.reCaptchaValid = false;
        console.log(event);
        var recaptchaOutcome: IreCaptchaResponse;
        this._dataService.verifyRecaptchaResponse(event)
            .subscribe(
                (response) => {
                    /* this function is executed every time there's a new output */
                    recaptchaOutcome = response;
                    this.reCaptchaValid = recaptchaOutcome.success;
                    console.log("VALUE RECEIVED: " + recaptchaOutcome.success);
                },
                (err) => {
                        this.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
                        console.log("ERROR in component. save to db: "+ err);
                },
                () => {
                    console.log("Completed");
                })
    }

    showDialog(message: string) {
        this.dialogContent = message;
        this.display = true;
    }

    hideDialog() {
        this.dialogContent = '';
        this.display = false;
    }
}
