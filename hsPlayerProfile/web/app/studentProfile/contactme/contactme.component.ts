import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IContactMe } from '../../models/IContactMe';
import { IReCAPTCHA } from '../../models/IReCAPTCHA';
import { IreCaptchaResponse } from '../../models/IreCaptchaResponse';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';
// import { MessageFormComponent } from '../../messageform/messageform.component';

//Global settings
import { Config } from '../../config.service';

@Component({
    selector: 'pp-contactme',
    moduleId: module.id,
    templateUrl: 'contactme.component.html'
})
export class ContactMeComponent implements OnInit { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    errorMessage: string;

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

        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Contact Me';
    }

    onSubmit(): void { 
        var id = this.myprofile.id;
        var studentemail = this.myprofile.primaryEmail;
        var msg: IContactMe = {
            studentid: id,
            contactname: this.form.value['contactname'],
            contactphone: this.form.value['contactphone'],
            contactemail: this.form.value['contactemail'],
            message: this.form.value['message']
        }

        var ds: DataService = this._dataService;

        var response;
        ds.poststudentContact(msg)
        .subscribe(
            (response) => {
                    /* this function is executed every time there's a new output */
                console.log("VALUE RECEIVED: " + response);
            },
            (err) => {
                    this.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
                    console.log("ERROR in component. save to db: "+ err);
            },
            () => {
                    /* this function is executed when the observable ends (completes) its stream */
                    console.log("post to database completed");

                    ds.sendEMailToStudent(msg, studentemail)
                    .subscribe(
                        (response) => {
                            /* this function is executed every time there's a new output */
                            console.log("VALUE RECEIVED: " + response);
                        },
                        (err) => {
                                this.showDialog("We''re so sorry.  There was an error sending your message.");
                                console.log("ERROR in component. Send email: "+err);
                        },
                        () => {
                                this.showDialog('Your messages was sent.  A copy was also sent to ' + msg.contactemail + '. Please check your email to see this message.');
                                this.form.reset();
                                this.grecaptcha.reset();
                                console.log("COMPLETED in component");
                        }
                    );
            }
        );
    };

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