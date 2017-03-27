import { Component, ViewChild } from '@angular/core';
import { MessageFormComponent } from '../shared/messageform/messageform.component';
import { Message } from '../shared/messageform/message';
import { DataService } from '../services/data.service';
import { IFeedback } from '../models/IFeedback';

@Component({
    selector: 'pp-feedback',
    moduleId: module.id,
    templateUrl: 'feedback.component.html'
})

export class FeedbackComponent {
    @ViewChild(MessageFormComponent) private messageFormComponent: MessageFormComponent;
    public pageTitle: string = 'Feedback - Please tell us what you think!!!';
    public panelMessage: string = 'Please send us your feedback';

    constructor(private _dataService: DataService) {}

    onSubmit(event:any): void { 

        console.log("On Submit in contactme");
        this.messageFormComponent.reset();

        var inputmsg: Message = event;
        var msg: IFeedback = {
            contactname: inputmsg.contactname,
            contactphone: inputmsg.contactphone,
            contactemail: inputmsg.contactemail,
            message: inputmsg.message,
            ipaddress: ''
        }

        console.log(msg);

        var response;
        this._dataService.postSiteFeedback(msg)
        .subscribe(
            (response) => {
                /* this function is executed every time there's a new output */
                console.log("VALUE RECEIVED: " + response);
            },
            (err) => {
                this.messageFormComponent.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
                this.messageFormComponent.reset();
                console.log("ERROR in component. save to db: "+ err);
            },
            () => {
                /* this function is executed when the observable ends (completes) its stream */
                this.messageFormComponent.showDialog("Our goal is to provide a service that you find valuable as you pursue your college dreams.  Your feedback is an extremely important part of achieving this goal.  Thank you for taking the time to make this submission.");
                this.messageFormComponent.reset();
                console.log("Complete");
            }
        );
    };

}