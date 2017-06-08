import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/primeng';

import { ICoach } from '../../models/ICoach';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';

@Component({
    selector: 'pp-coaches',
    moduleId: module.id,
    templateUrl: 'coaches.component.html'
})
export class CoachesComponent implements OnInit { 
    private errorMessage: string;
    private form: FormGroup;
    private editmode: string = '';

    coachespopupvisible: boolean = false;
    coachespopuphdr: string = '';

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "id": [null],
            "studentid": [""],
            "sortorder": [""],
            "name": ["", Validators.required],
            "description": ["", Validators.required],
            "email": ["", Validators.required],
            "phone":  [""]
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('sortorder').setValue(this.findMaxSortOrder());

        this.coachespopuphdr = 'Add a new coach to your profile';
        this.coachespopupvisible = true;
    }

    editRow(id:number, coach: ICoach) {
        this.editmode = 'edit';
        this.form.get('id').setValue(coach.id);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('sortorder').setValue(coach.sortorder);
        this.form.get('name').setValue(coach.name);
        this.form.get('description').setValue(coach.description);
        this.form.get('email').setValue(coach.email);
        this.form.get('phone').setValue(coach.phone);

        this.coachespopuphdr = 'Edit this coach:';
        this.coachespopupvisible = true;
    }

    onSubmit(): void { 

        var aCoach:ICoach = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            sortorder: this.form.value['sortorder'],
            name: this.form.value['name'],
            description: this.form.value['description'],
            email: this.form.value['email'],
            phone: this.form.value['phone']
        };

        //send to edit service to post
        if (this.editmode == 'add')
        {
            this._spDataService.postCoach(aCoach)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }
        else
        {
            this._spDataService.putCoach(aCoach)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }

        //Hide overlay
        this.form.reset();
        this.coachespopupvisible = false;
    }

    deleteRow(id:number) {
        this._spDataService.deleteCoach(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in deleteRow: Delete: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.setCoaches(this._spDataService.myprofile.id);
    }

    onCancel(): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.coachespopupvisible = false;        
            }
        });
    }

    findMaxSortOrder():number {
        let mx = 0;
        this._spDataService.coaches.forEach(function(coach) {
            if (coach.sortorder > mx)
                mx = coach.sortorder;
        });
        return mx+1;
    }
}