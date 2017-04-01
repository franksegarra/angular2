import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { IReCAPTCHA } from '../../models/IReCAPTCHA';
import { IreCaptchaResponse } from '../../models/IreCaptchaResponse';
import { MessageFormService } from './messageform.service';
import { Message } from './message';

@Component({
    selector: 'pp-messageform',
    moduleId: module.id,
    templateUrl: 'messageform.component.html'
})
export class MessageFormComponent implements OnInit { 
    @Input() panelMessage: string = 'Send me a message';
    @Output() onFormSubmit = new EventEmitter<Message>();

    form: FormGroup;
    contactname = new FormControl("", Validators.required);
    contactphone = new FormControl("");
    contactemail = new FormControl("", Validators.required);
    message = new FormControl("", Validators.required);

    display: boolean = false;
    dialogContent: string = '';

    grecaptcha: IReCAPTCHA;
    reCaptchaValid: boolean = false;

    constructor(private fb: FormBuilder, private _mfService: MessageFormService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "contactname": ["", Validators.required],
            "contactphone": [""],
            "contactemail": ["", Validators.required], //, [Validators.pattern(`/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`)] 
            "message": ["", Validators.required]
        });
    }

    onSubmit(): void { 

        console.log("On Submit in messageform");
        
        var aMessage:Message = {
            contactname: this.form.value['contactname'],
            contactphone: this.form.value['contactphone'],
            contactemail: this.form.value['contactemail'],
            message: this.form.value['message']
        };

        this.onFormSubmit.emit(aMessage);
    }

    showResponse(event:any) {
        this.reCaptchaValid = false;
        console.log(event);
        var recaptchaOutcome: IreCaptchaResponse;
        this._mfService.verifyRecaptchaResponse(event)
            .subscribe(
                (response) => {
                    /* this function is executed every time there's a new output */
                    recaptchaOutcome = response;
                    this.reCaptchaValid = recaptchaOutcome.success;
                    console.log("VALUE RECEIVED: " + recaptchaOutcome.success);
                },
                (err) => {
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

    reset() {
        this.form.reset();
    }
}
