import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProfile } from '../../models/IProfile';
import { IScheduleItem } from '../../models/IScheduleItem';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { ConfirmationService } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-schedule',
    moduleId: module.id,
    templateUrl: 'schedule.component.html'
})
export class ScheduleComponent { 
    @Input() myprofile: IProfile;
    @Input() schedItems: IScheduleItem[];
    private errorMessage: string;
    pageName: string = "Where I'll be";
    private form: FormGroup;
    private editmode: string = '';

    constructor(private fb: FormBuilder, private _spDataService: spDataService, private confirmationService: ConfirmationService, private popup:Popup) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "id": [null],
            "studentid": [""],
            "activitydate": [null],
            "starttime": [""],
            "activityid": [""],
            "activitydesc": [""],
            "activitytypeid": [null],
            "location": [""],
            "linkText": [""],
            "activitytype": [""]
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.schedItems == null) ? null : this.schedItems[0].activityid);
        this.showPopup("Add a new date to your schedule");
    }

    editRow(id:number, scheduleItem: IScheduleItem) {
        this.editmode = 'edit';
        this.form.get('id').setValue(scheduleItem.id);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.schedItems == null) ? null : this.schedItems[0].activityid);
        this.showPopup("Change this activity:");
    }

    onSubmit(): void { 

        var aScheduleItem:IScheduleItem = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            activitydate: this.form.value['activitydate'],
            starttime: this.form.value['starttime'],
            activityid: this.form.value['activityid'],
            activitydesc: this.form.value['activitydesc'],
            activitytypeid: this.form.value['activitytypeid'],
            location: this.form.value['location'],
            linkText: this.form.value['linkText'],
            activitytype: this.form.value['activitytype']           
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
    }}