import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IContactMe } from '../../models/IContactMe';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';

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
    contactname= new FormControl("", Validators.required);
    contactphone= new FormControl("");
    contactemail= new FormControl("", Validators.required);
    message= new FormControl("", Validators.required);

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
                console.log("VALUE RECEIVED: "+response);
            },
            (err) => {
                    /* this function is executed when there's an ERROR */
                    console.log("ERROR: "+err);
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
                                /* this function is executed when there's an ERROR */
                                console.log("ERROR: "+err);
                        },
                        () => {
                                /* this function is executed when the observable ends (completes) its stream */
                                console.log("COMPLETED");
                        }
                    );
            }
        );
    };

}