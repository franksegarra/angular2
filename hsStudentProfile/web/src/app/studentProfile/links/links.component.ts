import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/primeng';

import { ILink } from '../../models/ILink';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html'
})
export class LinksComponent implements OnInit { 
    private pageName: string = 'Links';
    private errorMessage: string;
    private form: FormGroup;
    private editmode: string = '';

    linkpopupvisible: boolean = false;
    linkpopuphdr: string = '';

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "id": [null],
            "studentid": [""],
            "activityid": [""],
            "linkname": ["", Validators.required],
            "linkdescription": ["", Validators.required],
            "linkurl": ["", Validators.required]
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('activityid').setValue((this._spDataService.links == null) ? null : this._spDataService.links[0].activityid);

        this.linkpopuphdr = 'Add a new link to your profile';
        this.linkpopupvisible = true;
    }

    editRow(id:number, link: ILink) {
        this.editmode = 'edit';
        this.form.get('id').setValue(link.id);
        this.form.get('studentid').setValue(this._spDataService.myprofile.id);
        this.form.get('activityid').setValue((this._spDataService.links == null) ? null : this._spDataService.links[0].activityid);
        this.form.get('linkname').setValue(link.linkname);
        this.form.get('linkdescription').setValue(link.linkdescription);
        this.form.get('linkurl').setValue(link.linkurl);

        this.linkpopuphdr = 'Edit this link:';
        this.linkpopupvisible = true;
    }

    onSubmit(): void { 

        var aLink:ILink = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            activityid: this.form.value['activityid'],
            linkname: this.form.value['linkname'],
            linkdescription: this.form.value['linkdescription'],
            linkurl: this.form.value['linkurl']
        };

        //send to edit service to post
        if (this.editmode == 'add')
        {
            this._spDataService.postLink(aLink)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }
        else
        {
            this._spDataService.putLink(aLink)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }

        //Hide overlay
        this.form.reset();
        this.linkpopupvisible = false;
    }

    deleteRow(id:number) {
        this._spDataService.deleteLink(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in deleteRow: Delete: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.setLinks(this._spDataService.myprofile.id);
    }

    onCancel(): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.linkpopupvisible = false;        
            }
        });
    }
}