import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService, SelectItem, MultiSelect } from 'primeng/primeng';

import { IBBProfile } from '../../models/BBProfile';
import { spDataService } from '../services/spdata.service';
import { Config } from '../../config.service';
import { ImageComponent } from '../../shared/image/image.component';
import { PictureUpload } from '../../shared/pictureupload/pictureupload.component';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'pp-physical',
    moduleId: module.id,
    templateUrl: 'physical.component.html'
})
export class PhysicalComponent implements OnInit, AfterViewInit { 
    @ViewChild(ImageComponent) private imageComponent: ImageComponent;
    @ViewChild(PictureUpload) private picUpload: PictureUpload;
    private errorMessage: string;
    private form: FormGroup;

    editing: boolean = false;
    physpopupvisible: boolean = false;
    physpopuphdr: string = '';
    chgpicpopupvisible: boolean = false;
    chgpicpopuphdr: string = '';
    chgpicurl = "StudentBaseballProfile/PostProfilePicture/";

    private positionList: SelectItem[] = [];
    otherPositionList: SelectItem[] = [];
    selectedpositions: string[];

    constructor(
        private fb: FormBuilder, 
        private _authService: AuthService,
        private _spDataService: spDataService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.createPositionList();

        this.form = this.fb.group({
            "id": [null],
            "studentid": [null],
            "statspictureid": [null],
            "runningtime": [null],
            "bats": [""],
            "throws": [""],
            "travelteam": [""],
            "travelurl": [""],
            "position": [""],
            "selectedpositions": [],
            "statspicturefilename": [""],
            "runningtimelocation": [""],
            "runningtimelocationurl": [""],
        });
    }    

    public ngAfterViewInit(): void {
        this.imageComponent.setImageId(this._spDataService.bbprofile.statspictureid);
    }

    onEditClicked() {
        this.createOtherPositionList(this._spDataService.bbprofile.position);
        this.editing=true;
        this.form.get('id').setValue(this._spDataService.bbprofile.id);
        this.form.get('studentid').setValue(this._spDataService.bbprofile.studentid);
        this.form.get('statspictureid').setValue(this._spDataService.bbprofile.statspictureid);
        this.form.get('runningtime').setValue(this._spDataService.bbprofile.runningtime);
        this.form.get('bats').setValue(this._spDataService.bbprofile.bats);
        this.form.get('throws').setValue(this._spDataService.bbprofile.throws);
        this.form.get('travelteam').setValue(this._spDataService.bbprofile.travelteam);
        this.form.get('travelurl').setValue(this._spDataService.bbprofile.travelurl);
        this.form.get('position').setValue(this._spDataService.bbprofile.position);
        this.form.get('selectedpositions').setValue(this._spDataService.bbprofile.otherpositions.split(','));
        this.form.get('statspicturefilename').setValue(this._spDataService.bbprofile.statspicturefilename);
        this.form.get('runningtimelocation').setValue(this._spDataService.bbprofile.runningtimelocation);
        this.form.get('runningtimelocationurl').setValue(this._spDataService.bbprofile.runningtimelocationurl);

        this.physpopuphdr = 'Modify your baseball profile';
        this.physpopupvisible = true;
    }

    onSubmit(): void { 

        var bbProfile:IBBProfile = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            statspictureid: this.form.value['statspictureid'],
            runningtime: this.form.value['runningtime'],
            bats: this.form.value['bats'],
            throws: this.form.value['throws'],
            travelteam: this.form.value['travelteam'],
            travelurl: this.form.value['travelurl'],
            position: this.form.value['position'],
            otherpositions: this.form.value['selectedpositions'],
            statspicturefilename: this.form.value['statspicturefilename'],
            runningtimelocation: this.form.value['runningtimelocation'],
            runningtimelocationurl: this.form.value['runningtimelocationurl']
        };

        console.log(bbProfile);

        // this._spDataService.putCoach(aCoach)
        //     .subscribe(
        //         (response) => {},
        //         (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
        //         () => {this.refreshData();}
        //     );

        // //Hide overlay
        // this.form.reset();
        // this.popup.hide();
    }

    //Lookup tables
    createPositionList() {
        var temp = this.positionList;
        if (this.positionList.length == 0)
        {
            temp.push({label:'P', value:'P'});
            temp.push({label:'C', value:'C'});
            temp.push({label:'1B', value:'1B'});
            temp.push({label:'2B', value:'2B'});
            temp.push({label:'3B', value:'3B'});
            temp.push({label:'SS', value:'SS'});
            temp.push({label:'LF', value:'LF'});
            temp.push({label:'CF', value:'CF'});
            temp.push({label:'RF', value:'RF'});
        }
    }

    //Lookup tables
    createOtherPositionList(primaryposition: string) {
        this.otherPositionList.length = 0;
        var temp = this.otherPositionList;
        this.positionList.forEach(function(position) {
            if (position.label!=primaryposition)
            temp.push({label:position.label, value:position.value});
        });
    }

    //Moved to service
    onCancel(): void { 
        this.editing=false;

        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.physpopupvisible = false;        
            }
        });
    }

    onChangePicClicked() {
        this.chgpicpopupvisible = true;
        this.picUpload.clearQueue();
    }

    onUploadComplete(event) {
        this.refreshData();
        this.chgpicpopupvisible = false;
    }

    refreshData(){
        this._spDataService.getBBProfile(this._spDataService.myprofile.id)
            .subscribe(
                (response) => {
                    this._spDataService.bbprofile = response[0];
                },
                (err) => {console.log("ERROR in component. getStudentProfile: "+ err);},
                () => {
                    this.imageComponent.setImageId(this._spDataService.bbprofile.statspictureid);                    
                }
            )
    }

    onPrimaryPositionChanged() {
        let primaryposition = this.form.value['position'];
        let otherPositions = this.form.value['selectedpositions'];
        this.createOtherPositionList(primaryposition);
        this.form.get('selectedpositions').setValue(this.deleteArrayItem(otherPositions,primaryposition));       
    }

    deleteArrayItem(arr: any[], item: any): any[]
    {
        let newarr = arr;
        let index: number = newarr.indexOf(item);
        if (index !== -1) {
            newarr.splice(index, 1);
        }
        return newarr;
    }
}