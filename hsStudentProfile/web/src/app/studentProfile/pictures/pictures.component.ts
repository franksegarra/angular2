import { Component, OnInit } from '@angular/core';
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
    pageName: string = 'Pictures';
    selectedPic: IPicture;

    constructor(public pictureService:PictureService, private _spDataService:spDataService ) {}

    ngOnInit(): void {
        this.pictureService.appSetup("imageDisplay", this._spDataService.profilepics, this._spDataService.picturelist);
    }

    nodeSelect(event: any) {
        var eventObj: TreeNode = event.node ;

        //No data.  Must be a category
        if (eventObj.data == "") {
            eventObj.expanded = !eventObj.expanded;
            this.selectedPic = null;
             return;
        }
        
        this.selectedPic = eventObj.data;
        console.log(this.selectedPic);
        if (this.selectedPic.id.toString() != "")
        {
            this.pictureService.selectedPictureById(this.selectedPic.id);
        }
    }

    onAddPic(event: any){        
    }

    onDeletePic(){        

        console.log(this.selectedPic);

        //No data.  Must be a category
        if (this.selectedPic == null) {
             return;
        }

        if (this.selectedPic.id.toString() != "")
        {
            this._spDataService.deletePicture(this.selectedPic.id);
            this.pictureService.removePictureById(this.selectedPic.id);
        }
       
    }
}