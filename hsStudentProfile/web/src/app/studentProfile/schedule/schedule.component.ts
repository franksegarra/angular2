import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProfile } from '../../models/IProfile';
import { IScheduleItem } from '../../models/ScheduleItem';
import { IStudentSchedule } from '../../models/StudentSchedule';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { ConfirmationService } from 'primeng/primeng';
import { Calendar, Dropdown, SelectItem } from 'primeng/primeng';
import { DateService } from '../../services/date.service'

import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-schedule',
    moduleId: module.id,
    templateUrl: 'schedule.component.html',
    providers: [Popup]
})
export class ScheduleComponent { 
    @Input() myprofile: IProfile;
    @Input() schedItems: IScheduleItem[];
    private errorMessage: string;
    pageName: string = "Where I'll be";
    private form: FormGroup;
    private editmode: string = '';

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private _dateService: DateService, 
        private confirmationService: ConfirmationService, 
        private popup:Popup
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "id": [null],
            "studentid": [""],
            "activityid": ["", Validators.required],
            "activitytypeid": [null, Validators.required],
            "activitydesc": ["", Validators.required],
            "venue" : ["", Validators.required],
            "address" : [""],
            "city": [""],
            "statecode": [""],
            "zipcode": [""],
            "activitydate": [null, Validators.required],
            "hours": [""],
            "minutes": [""],
            "ampm": [""]
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.showPopup("Add a new date to your schedule");
    }

    editRow(id:number, scheduleItem: IScheduleItem) {
        this.editmode = 'edit';
        this.form.get('id').setValue(scheduleItem.id);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue(scheduleItem.activityid);
        this.form.get('activitytypeid').setValue(scheduleItem.activitytypeid);
        this.form.get('activitydesc').setValue(scheduleItem.activitydesc);
        this.form.get('venue').setValue(scheduleItem.venue);
        this.form.get('address').setValue(scheduleItem.address);
        this.form.get('city').setValue(scheduleItem.city);
        this.form.get('statecode').setValue(scheduleItem.statecode);
        this.form.get('zipcode').setValue(scheduleItem.zipcode);
        this.form.get('activitydate').setValue(this._dateService.formatDateString(scheduleItem.activitydate));
        this.form.get('hours').setValue(this._dateService.formatTimePart(scheduleItem.starttime, 'hr'));
        this.form.get('minutes').setValue(this._dateService.formatTimePart(scheduleItem.starttime, 'mn'));
        this.form.get('ampm').setValue(this._dateService.formatTimePart(scheduleItem.starttime, 'ampm'));
        this.showPopup("Change this activity:");
    }

    onSubmit(): void { 

        var aScheduleItem:IStudentSchedule = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            activitydate: this.form.value['activitydate'],
            starttime: this._dateService.formatTimeString(this.form.value['hours'],this.form.value['minutes'], this.form.value['ampm']),
            activityid: this.form.value['activityid'],
            activitydesc: this.form.value['activitydesc'],
            activitytypeid: this.form.value['activitytypeid'],
            venue: this.form.value['venue'],
            address: this.form.value['address'],
            city: this.form.value['city'],
            statecode: this.form.value['statecode'],
            zipcode: this.form.value['zipcode']
        };

        //send to edit service to post
        if (this.editmode == 'add')
        {

            this._spDataService.postSchedule(aScheduleItem)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }
        else
        {
            this._spDataService.putSchedule(aScheduleItem)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }

        //Hide overlay
        this.form.reset();
        this.popup.hide();
    }

    onCancel(): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.popup.hide();
            }
        });
    }

    deleteRow(id:number) {
        this._spDataService.deleteSchedule(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                () => {this.refreshData();}
            );
    }

    showPopup(myheader:string) {

        this.popup.options = {
            header:myheader,
            color: "#326eb7", // red, blue.... 
            widthProsentage: 40, // The with of the popou measured by browser width 
            animationDuration: 0, // in seconds, 0 = no animation 
            showButtons: false, // You can hide this in case you want to use custom buttons 
            confirmBtnContent: "OK", // The text on your confirm button 
            cancleBtnContent: "Cancel", // the text on your cancel button 
            confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
            cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
    
        this.popup.show(this.popup.options);
    }

    refreshData(){
        this._spDataService.getSchedule(this.myprofile.id).subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);
    }
}