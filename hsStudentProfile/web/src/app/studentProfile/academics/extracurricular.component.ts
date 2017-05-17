import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/primeng';

import { IExtraCurricular } from '../../models/IExtraCurricular';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';

@Component({
    selector: 'pp-extracurricular',
    moduleId: module.id,
    templateUrl: 'extracurricular.component.html'
})
export class ExtraCurricularComponent { 
    private errorMessage: string;
    private form: FormGroup;
    private editmode: string = '';

    ecpopupvisible: boolean = false;
    ecpopuphdr: string = '';

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "id": [null],
            "studentid": [null],
            "ecname": ["", Validators.required],
            "ecdescription": ["", Validators.required],
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);

        this.ecpopuphdr = 'Add a new activity to your profile';
        this.ecpopupvisible = true;
    }

    editRow(id:number, ec: IExtraCurricular) {
        this.editmode = 'edit';
        this.form.get('id').setValue(ec.id);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('ecname').setValue(ec.ecname);
        this.form.get('ecdescription').setValue(ec.ecdescription);

        this.ecpopuphdr = 'Edit this activity:';
        this.ecpopupvisible = true;
    }

    onSubmit(): void { 

        var anec: IExtraCurricular = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            ecname: this.form.value['ecname'],
            ecdescription: this.form.value['ecdescription'],
        };

        //send to edit service to post
        if (this.editmode == 'add')
        {
            this._spDataService.postExtraCurricular(anec)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }
        else
        {
            this._spDataService.putExtraCurricular(anec)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }

        //Hide overlay
        this.form.reset();
        this.ecpopupvisible = false;
    }

    deleteRow(id:number) {
        this._spDataService.deleteExtraCurricular(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in deleteRow: Delete: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.setExtraCurricular(this._spDataService.myprofile.id);
    }

    onCancel(): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.ecpopupvisible = false;        
            }
        });
    }
}













