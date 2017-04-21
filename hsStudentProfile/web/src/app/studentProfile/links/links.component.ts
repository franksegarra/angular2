import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { ILink } from '../../models/ILink';

import { spDataService } from '../services/spdata.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { spUtilityService } from '../services/sputility.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { ConfirmationService } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html',
    providers: [Popup]
})
export class LinksComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() links: ILink[];
    private pageName: string = 'Links';
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
            "activityid": [""],
            "linkname": ["", Validators.required],
            "linkdescription": ["", Validators.required],
            "linkurl": ["", Validators.required]
        });
    }

    addRow() {
        this.editmode = 'add';
        this.form.get('id').setValue(0);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.links == null) ? null : this.links[0].activityid);
        this._spUtilityService.showPopup(this.popup, "Add a new link to your profile");
    }

    editRow(id:number, link: ILink) {
        this.editmode = 'edit';
        this.form.get('id').setValue(link.id);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.links == null) ? null : this.links[0].activityid);
        this.form.get('linkname').setValue(link.linkname);
        this.form.get('linkdescription').setValue(link.linkdescription);
        this.form.get('linkurl').setValue(link.linkurl);
        this._spUtilityService.showPopup(this.popup, "Edit this link:");
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

        //this.form.get('studentid').setValue(this.myprofile.id);
        console.log(JSON.stringify(aLink));

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
        this.popup.hide();
    }

    deleteRow(id:number) {
        this._spDataService.deleteLink(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.getLinks(this.myprofile.id).subscribe(links => this.links = links, error => this.errorMessage = <any>error);
    }

    //Moved to service
    onCancel(): void { 
        this._spUtilityService.Cancel(this.popup);
    }
}