import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';

@Component({
    selector: 'pp-contactme',
    moduleId: module.id,
    templateUrl: 'contactme.component.html'
})
export class ContactMeComponent implements OnInit { 
    @Input() myprofile: IProfile;
    pageTitle: string;

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Contact Me';
    }

    onSubmit(form: any): void {  
        console.log('you submitted value:', form);  
    };

}