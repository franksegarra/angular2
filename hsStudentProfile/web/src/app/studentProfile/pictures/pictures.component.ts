import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IProfilePictures } from '../../models/IProfilePictures';
import { IPicture } from './IPicture';
import { PictureService } from './picture.service';
import { TreeNode } from 'primeng/primeng';

@Component({
    selector: 'pp-pictures',
    moduleId: module.id,
    templateUrl: 'pictures.component.html'
})
export class PicturesComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() profilepics: IProfilePictures[];
    pageTitle: string;

    constructor(public pictureService:PictureService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Pictures';
        this.pictureService.appSetup("imageDisplay", this.profilepics);
        this.pictureService.getPlaylist( this.myprofile.id );       
    }

    nodeSelect(event: any) {
        var eventObj: TreeNode = event.node ;
        var pic: IPicture = eventObj.data;
        if (pic.id.toString() != "")
        {
            this.pictureService.selectedPictureById(pic.id);
        }
    }
}