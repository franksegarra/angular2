import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IPicture } from './IPicture';
import { PictureService } from './picture.service';
import { TreeNode } from 'primeng/primeng';
import { spDataService } from '../services/spdata.service';
import { ImageComponent } from '../../shared/image/image.component';
import { PictureUpload } from '../../shared/pictureupload/pictureupload.component';
//import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'pp-pictures',
    moduleId: module.id,
    templateUrl: 'pictures.component.html'
})
export class PicturesComponent implements OnInit { 
    @ViewChild(ImageComponent) private imageComponent: ImageComponent;
    @ViewChild(PictureUpload) private picUpload: PictureUpload;
    pageName: string = 'Pictures';
    selectedPic: IPicture;
    addpicpopupvisible: boolean = false;
    addpicpopuphdr: string = 'Add a new picture';
    addpicurl: string = 'StudentPictures/PostPicture/';
    private form: FormGroup;

    constructor(
        private fb: FormBuilder, 
        //private _authService: AuthService,
        public pictureService:PictureService, 
        private _spDataService:spDataService
    ) {}

    ngOnInit(): void {
        this.refreshData();
        this.form = this.fb.group({
            "category": [null]
        })
    }

    ngAfterViewInit(): void {
        this.imageComponent.setImageId(this.pictureService.selectedPictureId);
    }

    nodeSelect(event: any) {
        //No data.  Must be a category
        if (this.pictureService.selectedFile.data == "") {
             return;
        }
        
        this.selectedPic = this.pictureService.selectedFile.data;
        if (this.selectedPic.id.toString() != "")
        {
            this.imageComponent.setImageId(this.selectedPic.id);
        }
    }

    onAddPic(){        
        this.addpicpopupvisible = true;       
        this.picUpload.clearQueue();
    }

    onUploadComplete(event) {
        this.refreshData();
        this.addpicpopupvisible = false;
    }

    onDeletePic(){        
        //No data.  Must be a category
        if (this.selectedPic == null) {
             return;
        }

        if (this.selectedPic.id.toString() != "")
        {
            //console.log(this.selectedPic.id);
            this._spDataService.deletePicture(this.selectedPic.id)
            .subscribe(
                (response) => {
                    this.pictureService.removePictureById(this.selectedPic.id);
                    this.selectedPic = this.pictureService.selectedFile.data;
                    this.imageComponent.setImageId(this.selectedPic.id);
                },
                (err) => {console.log("ERROR in deleteRow: Delete: "+ err);},
                () => {}
            );
        }
       
    }

    refreshData(){
            this._spDataService.getPictures(this._spDataService.myprofile.id)
                    .subscribe(
                        (piclist) => { 
                            this._spDataService.picturelist = piclist;
                            this.pictureService.appSetup("imageDisplay", this._spDataService.profilepics, this._spDataService.picturelist);
                            this.imageComponent.setImageId(this.pictureService.selectedPictureId);
                        }, 
                        (error) => {
                            console.error('error in pictures.component.ts');
                            console.error(error);
                        }
                    );
        }
    
}