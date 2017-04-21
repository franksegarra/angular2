import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { ICoach } from '../../models/ICoach';

import { spDataService } from '../services/spdata.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { spUtilityService } from '../services/sputility.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { ConfirmationService } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';


@Component({
    selector: 'pp-coaches',
    moduleId: module.id,
    templateUrl: 'coaches.component.html',
    providers: [Popup]
})
export class CoachesComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() coaches: Array<ICoach>;
    private errorMessage: string;
    private form: FormGroup;
    private editmode: string = '';

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private _spUtilityService: spUtilityService,
        private confirmationService: ConfirmationService, 
        private popup:Popup, 
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
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('sortorder').setValue(this.findMaxSortOrder());
        this._spUtilityService.showPopup(this.popup, "Add a new coach to your profile");
    }

    editRow(id:number, coach: ICoach) {
        this.editmode = 'edit';
        this.form.get('id').setValue(coach.id);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('sortorder').setValue(coach.sortorder);
        this.form.get('name').setValue(coach.name);
        this.form.get('description').setValue(coach.description);
        this.form.get('email').setValue(coach.email);
        this.form.get('phone').setValue(coach.phone);
        this._spUtilityService.showPopup(this.popup, "Edit this coach:");
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
            console.log(JSON.stringify(aCoach));

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
        this.popup.hide();
    }

    deleteRow(id:number) {
        this._spDataService.deleteCoach(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.getCoaches(this.myprofile.id).subscribe(coaches => this.coaches = coaches, error => this.errorMessage = <any>error);
    }

    //Moved to service
    onCancel(): void { 
        this._spUtilityService.Cancel(this.popup);
    }

    findMaxSortOrder():number {
        let mx = 0;
        this.coaches.forEach(function(coach) {
            if (coach.sortorder > mx)
                mx = coach.sortorder;
        });
        return mx+1;
    }


}