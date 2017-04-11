import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IProfilePictures } from '../../models/IProfilePictures';
import { IPicture } from './IPicture';
import { PictureService } from './picture.service';
import { TreeNode } from 'primeng/primeng';
import { spDataService } from '../services/spdata.service';

//Global settings
import { Config } from '../../config.service';

@Component({
    selector: 'pp-pictures',
    moduleId: module.id,
    templateUrl: 'pictures.component.html'
})
export class PicturesComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() profilepics: IProfilePictures[];
    @Input() picturelist: IPicture[];
    pageName: string = 'Pictures';

    constructor(public pictureService:PictureService, private _spDataService:spDataService ) {}

    ngOnInit(): void {
        this.pictureService.appSetup("imageDisplay", this.profilepics, this.picturelist);
    }

    nodeSelect(event: any) {
        var eventObj: TreeNode = event.node ;

        //No data.  Must be a category
        if (eventObj.data == "") {
            eventObj.expanded = !eventObj.expanded;
             return;
        }

        var pic: IPicture = eventObj.data;
        if (pic.id.toString() != "")
        {
            this.pictureService.selectedPictureById(pic.id);
        }
    }
}