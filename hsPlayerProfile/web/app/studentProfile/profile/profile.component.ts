import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';

@Component({
    selector: 'pp-profile',
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})
export class ProfileComponent { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    // errorMessage: string;

    // Bring this back when we implement the post
    // constructor(private _dataService: DataService) {
    // };

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'About Me';
    }
}