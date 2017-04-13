import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProfile } from '../../models/IProfile';
import { ILink } from '../../models/ILink';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { ConfirmationService } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html'
})
export class LinksComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() links: ILink[];
    private errorMessage: string;
    private pageName: string = 'Links';
    private form: FormGroup;
    private editmode: string = '';

    constructor(private fb: FormBuilder, private _spDataService: spDataService, private confirmationService: ConfirmationService, private popup:Popup) {}

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
        this.showPopup("Add a new link to your profile");
    }

    editRow(id:number, link: ILink) {
        this.editmode = 'edit';
        this.form.get('id').setValue(link.id);
        this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.links == null) ? null : this.links[0].activityid);
        this.form.get('linkname').setValue(link.linkname);
        this.form.get('linkdescription').setValue(link.linkdescription);
        this.form.get('linkurl').setValue(link.linkurl);
        this.showPopup("Edit this link:");
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
        this._spDataService.deleteLink(id)
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
        this._spDataService.getLinks(this.myprofile.id).subscribe(links => this.links = links, error => this.errorMessage = <any>error);
    }
}