import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';

@Component({
    selector: 'pp-pictures',
    moduleId: module.id,
    templateUrl: 'pictures.component.html'
})
export class PicturesComponent { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    // errorMessage: string;
    // cinfo: IContactMe;

    // Bring this back when we implement the post
    // constructor(private _dataService: DataService) {
    // };

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Pictures';
    }
}