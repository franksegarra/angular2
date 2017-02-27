import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IContactMe } from '../../models/IContactme';

@Component({
    selector: 'pp-contactme',
    moduleId: module.id,
    templateUrl: 'contactme.component.html'
})
export class ContactMeComponent { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    // errorMessage: string;
    // cinfo: IContactMe;

    // Bring this back when we implement the post
    // constructor(private _dataService: DataService) {
    // };

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Contact Me';
    }

    onSubmit(form: any): void {  
        console.log('you submitted value:', form);  
    };

}