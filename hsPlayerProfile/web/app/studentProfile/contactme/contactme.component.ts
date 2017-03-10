import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IContactMe } from '../../models/IContactMe';
import { MessageFormComponent } from '../../shared/messageform/messageform.component';
import { Message } from '../../shared/messageform/message';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-contactme',
    moduleId: module.id,
    templateUrl: 'contactme.component.html'
})
export class ContactMeComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @ViewChild(MessageFormComponent) private messageFormComponent: MessageFormComponent;
   
    pageTitle: string;
    panelMessage: string = 'Send me a message:';
    errorMessage: string;

    constructor(private _dataService: DataService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Contact Me';
    }

    onSubmit(event:any): void { 

        console.log("On Submit in contactme");

        var inputmsg: Message = event;
        var id = this.myprofile.id;
        var studentemail = this.myprofile.primaryEmail;

        var msg: IContactMe = {
            studentid: id,
            contactname: inputmsg.contactname,
            contactphone: inputmsg.contactphone,
            contactemail: inputmsg.contactemail,
            message: inputmsg.message
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
                    this.messageFormComponent.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
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
                                this.messageFormComponent.showDialog("We''re so sorry.  There was an error sending your message.");
                                console.log("ERROR in component. Send email: "+err);
                        },
                        () => {
                                this.messageFormComponent.showDialog('Your messages was sent.  A copy was also sent to ' + msg.contactemail + '. Please check your email to see this message.');
                                this.messageFormComponent.reset();
                                console.log("COMPLETED in component");
                        }
                    );
            }
        );
    };
}