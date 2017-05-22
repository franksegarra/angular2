import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService, Calendar, SelectItem, MultiSelect, Spinner, InputTextarea, FileUpload } from 'primeng/primeng';

import { IStudent } from '../../models/IStudent';
import { spDataService } from '../services/spdata.service';
import { Config } from '../../config.service';
import { DateService } from '../../services/date.service'

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'pp-profile',
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit { 
    profilePicUrl: string = Config.PICTUREFOLDER + this._spDataService.myprofile.profilepicturefilename; 
    private errorMessage: string;
    private form: FormGroup;
    editing: boolean = false;

    tspopupvisible: boolean = false;
    tspopuphdr: string = '';

    chgpicpopupvisible: boolean = false;
    chgpicpopuphdr: string = '';

    constructor(
        private fb: FormBuilder, 
        private _authService: AuthService,
        private _spDataService: spDataService,
        private _dateService: DateService, 
        private confirmationService: ConfirmationService
    ) {}

    onChangePicClicked() {
        this.chgpicpopuphdr = 'Change your profile picture';
        this.chgpicpopupvisible = true;
    }

    onBeforeSend(event) {
        event.xhr.setRequestHeader('Authorization', 'Bearer ' + this._authService.token);
    }

    onUploadComplete(event) {
        //this.refreshData();
        //this.profilePicUrl = Config.PICTUREFOLDER + this._spDataService.myprofile.profilepicturefilename;
    }

    ngOnInit(): void {
        
        console.log(this.profilePicUrl);

        this.form = this.fb.group({
            "id": [null],
            "profilename": [""],
            "firstname": [null],
            "lastname": [null],
            "primaryemail": [""],
            "highschoolid": [null],
            "graduationyear": [null],
            "additionalinfo": [""],
            "gpa": [null],
            "sattestdate": [""],
            "satscore": [null],
            "acttestdate": [""],
            "actscore": [null],
            "ncaaid": [""],
            "phone": [null],
            "streetaddress1": [""],
            "streetaddress2": [""],
            "city": [""],
            "state": [""],
            "zip": [""],
            "displayaddrandphone": [null],
            "highschoolname": [""],
            "profilepictureid": [null],
            "profilepicturefilename": [""],
            "height": [""],
            "weight": [""],
            "collegemajor": [""],
            "loggedin": [null]
        });

    }

    onEditClicked() {
        this.editing=true;
        this.form.get('id').setValue(this._spDataService.myprofile.id);
        this.form.get('profilename').setValue(this._spDataService.myprofile.profilename);
        this.form.get('firstname').setValue(this._spDataService.myprofile.firstname);
        this.form.get('lastname').setValue(this._spDataService.myprofile.lastname);
        this.form.get('primaryemail').setValue(this._spDataService.myprofile.primaryemail);
        this.form.get('highschoolid').setValue(this._spDataService.myprofile.highschoolid);
        this.form.get('graduationyear').setValue(this._spDataService.myprofile.graduationyear);
        this.form.get('additionalinfo').setValue(this._spDataService.myprofile.additionalinfo);
        this.form.get('gpa').setValue(this._spDataService.myprofile.gpa);
        this.form.get('sattestdate').setValue(this._dateService.formatDateString(this._spDataService.myprofile.sattestdate));
        this.form.get('satscore').setValue(this._spDataService.myprofile.satscore);
        this.form.get('acttestdate').setValue(this._dateService.formatDateString(this._spDataService.myprofile.acttestdate));
        this.form.get('actscore').setValue(this._spDataService.myprofile.actscore);
        this.form.get('ncaaid').setValue(this._spDataService.myprofile.ncaaid);
        this.form.get('phone').setValue(this._spDataService.myprofile.phone);
        this.form.get('streetaddress1').setValue(this._spDataService.myprofile.streetaddress1);
        this.form.get('streetaddress2').setValue(this._spDataService.myprofile.streetaddress2);
        this.form.get('city').setValue(this._spDataService.myprofile.city);
        this.form.get('state').setValue(this._spDataService.myprofile.state);
        this.form.get('zip').setValue(this._spDataService.myprofile.zip);
        this.form.get('displayaddrandphone').setValue(this._spDataService.myprofile.displayaddrandphone);
        this.form.get('highschoolname').setValue(this._spDataService.myprofile.highschoolname);
        this.form.get('profilepictureid').setValue(this._spDataService.myprofile.profilepictureid);
        this.form.get('profilepicturefilename').setValue(this._spDataService.myprofile.profilepicturefilename);
        this.form.get('height').setValue(this._spDataService.myprofile.height);
        this.form.get('weight').setValue(this._spDataService.myprofile.weight);
        this.form.get('collegemajor').setValue(this._spDataService.myprofile.collegemajor);

        this.tspopuphdr = 'Modify your academic profile';
        this.tspopupvisible = true;
    }

    onSubmit(): void { 
        var aStudent:IStudent = {
            id: this.form.value['id'],
            profilename: this.form.value['profilename'],
            firstname: this.form.value['firstname'],
            lastname: this.form.value['lastname'],
            primaryemail: this.form.value['primaryemail'],
            highschoolid: this.form.value['highschoolid'],
            graduationyear: this.form.value['graduationyear'],
            additionalinfo: this.form.value['additionalinfo'],
            gpa: this.form.value['gpa'],
            sattestdate: this.form.value['sattestdate'],
            satscore: this.form.value['satscore'],
            acttestdate: this.form.value['acttestdate'],
            actscore: this.form.value['actscore'],
            ncaaid: this.form.value['ncaaid'],
            phone: this.form.value['phone'],
            streetaddress1: this.form.value['streetaddress1'],
            streetaddress2: this.form.value['streetaddress2'],
            city: this.form.value['city'],
            state: this.form.value['state'],
            zip: this.form.value['zip'],
            displayaddrandphone: this.form.value['displayaddrandphone'],
            profilepictureid: this.form.value['profilepictureid'],
            height: this.form.value['height'],
            weight: this.form.value['weight'],
            collegemajor: this.form.value['collegemajor']
        };

        this._spDataService.putStudent (aStudent)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                () => {this.refreshData();}
            );
        
        //Hide overlay
        this.form.reset();
        this.tspopupvisible = false;
        this.editing=false;
    }

    onHide(): void {
        this.editing=false;

        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.tspopupvisible = false;        
            }
        });        
    }

    refreshData(){
        this._spDataService.setProfile(this._spDataService.myprofile.id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in component. getStudentProfile: "+ err);},
                () => {}
            )
    }

}