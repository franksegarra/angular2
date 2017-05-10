import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IBBProfile } from '../../models/BBProfile';
import { Config } from '../../config.service';

import { spDataService } from '../services/spdata.service';
import { spUtilityService } from '../services/sputility.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService, SelectItem, MultiSelect } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-physical',
    moduleId: module.id,
    templateUrl: 'physical.component.html',
    providers: [Popup]
})
export class PhysicalComponent implements OnInit { 
    @ViewChild('physPopup') popup:Popup;
    statsPicUrl: string; 
    private errorMessage: string;
    private form: FormGroup;
    editing: boolean = false;
    private positionList: SelectItem[] = [];
    otherPositionList: SelectItem[] = [];
    selectedpositions: string[];

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService,
        private _spUtilityService: spUtilityService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.statsPicUrl =  Config.PICTUREFOLDER + this._spDataService.bbprofile.statspicturefilename; 

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

        this._spUtilityService.showPopup(this.popup, "Modify your baseball profile");    
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
        this._spUtilityService.Cancel(this.popup);
    }

    refreshData(){
        this._spDataService.setBBProfile(this._spDataService.myprofile.id);
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