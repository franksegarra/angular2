import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
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
    templateUrl: 'physical.component.html'
})
export class PhysicalComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() bbprofile: IBBProfile;
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
        private confirmationService: ConfirmationService, 
        private popup:Popup
    ) {}

    ngOnInit(): void {
        this.statsPicUrl =  Config.PICTUREFOLDER + this.bbprofile.statspicturefilename; 

        this.createPositionList();

        this.form = this.fb.group({
            "id": [null],
            "studentid": [""],
            "statspictureId": [""],
            "runningtime": [""],
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

        this.createOtherPositionList(this.bbprofile.position);

        this.editing=true;
        this.form.get('id').setValue(this.bbprofile.id);
        this.form.get('studentid').setValue(this.bbprofile.studentid);
        this.form.get('statspictureId').setValue(this.bbprofile.statspictureId);
        this.form.get('runningtime').setValue(this.bbprofile.runningtime);
        this.form.get('bats').setValue(this.bbprofile.bats);
        this.form.get('throws').setValue(this.bbprofile.throws);
        this.form.get('travelteam').setValue(this.bbprofile.travelteam);
        this.form.get('travelurl').setValue(this.bbprofile.travelurl);
        this.form.get('position').setValue(this.bbprofile.position);
        this.form.get('selectedpositions').setValue(this.bbprofile.otherpositions.split(','));
        this.form.get('statspicturefilename').setValue(this.bbprofile.statspicturefilename);
        this.form.get('runningtimelocation').setValue(this.bbprofile.runningtimelocation);
        this.form.get('runningtimelocationurl').setValue(this.bbprofile.runningtimelocationurl);
        this._spUtilityService.showPopup(this.popup, "Modify your baseball profile");    
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
        this._spDataService.getBBProfile(this.myprofile.id).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);
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