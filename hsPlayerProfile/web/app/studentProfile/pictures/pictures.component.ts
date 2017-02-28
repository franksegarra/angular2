import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { PictureService } from './picture.service';

@Component({
    selector: 'pp-pictures',
    moduleId: module.id,
    templateUrl: 'pictures.component.html',
    styleUrls: ['pictures.component.css']
})
export class PicturesComponent implements OnInit { 
    @Input() myprofile: IProfile;
    pageTitle: string;

    constructor(public pictureService:PictureService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Pictures';
        this.pictureService.appSetup("imageDisplay");
        this.pictureService. getPlaylist( this.myprofile.id );       
    }
}