import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IClass } from '../../models/Class';

import { spDataService } from '../services/spdata.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { spUtilityService } from '../services/sputility.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { ConfirmationService, SelectButton, SelectItem } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html',
    providers: [Popup]
})
export class GradeComponent { 
    @Input() grade: number;
    @ViewChild('gradesPopup') popup:Popup;
    private errorMessage: string;
    private form: FormGroup;
    private editmode: string = '';
    
    yesno: SelectItem[] = [];
    
    average: number;

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private _spUtilityService: spUtilityService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {

        this.yesno.push({label:'Yes', value:1});
        this.yesno.push({label:'No', value:0});            
        
        this.form = this.fb.group({
            "id": [null],
            "studentid": [null],
            "grade": [null],
            "classname": ["", Validators.required],
            "finalaverage": [null],
            "lettergrade": ["", Validators.required],
            "collegecredit": [null]
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('grade').setValue(this.grade);
        this._spUtilityService.showPopup(this.popup, "Add a new class");
    }

    editRow(id:number, aclass: IClass) {
        this.editmode = 'edit';
        this.form.get('id').setValue(aclass.id);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('grade').setValue(aclass.grade);
        this.form.get('classname').setValue(aclass.classname);
        this.form.get('finalaverage').setValue(aclass.finalaverage);
        this.form.get('lettergrade').setValue(aclass.lettergrade);
        this.form.get('collegecredit').setValue(aclass.collegecredit);
        this._spUtilityService.showPopup(this.popup, "Edit this class:");
    }

    onSubmit(): void { 

        var aclass: IClass = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            grade: this.form.value['grade'],
            classname: this.form.value['classname'],
            finalaverage: this.form.value['finalaverage'],
            lettergrade: this.form.value['lettergrade'],
            collegecredit: this.form.value['collegecredit'],
        };

        //send to edit service to post
        if (this.editmode == 'add')
        {
            this._spDataService.postClass(aclass)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }
        else
        {
            this._spDataService.putClass(aclass)
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

    deleteRow(id:number) {
        this._spDataService.deleteClass(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in deleteRow: Delete: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.setClasses(this._spDataService.myprofile.id);
    }

    onCancel(): void { 
        this._spUtilityService.Cancel(this.popup);
    }
}