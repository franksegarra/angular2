import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProfile } from '../../models/IProfile';
import { ILink } from '../../models/ILink';
import { spDataService } from '../services/spdata.service';
import { EditButtonsComponent } from '../spshared/spEditButtons.component';
import { AddButtonComponent } from '../spshared/spAddButton.component';
import { OverlayPanel } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

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
    private ohdrtxt:  string = 'Add a new link to your profile';
    private form: FormGroup;
    private editmode: string = '';

    constructor(private fb: FormBuilder, private _spDataService: spDataService, private confirmationService: ConfirmationService) {}

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

    addRow(event, overlaypanel: OverlayPanel) {
        this.editmode = 'add';
        this.ohdrtxt = 'Add a new link to your profile';

        this.form.get('id').setValue(0);
        // this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.links == null) ? null : this.links[0].activityid);
        
        overlaypanel.show(event);
    }

    editRow(id:number, link: ILink, overlaypanel: OverlayPanel) {
        this.editmode = 'edit';
        this.ohdrtxt = 'Edit this link:';

        this.form.get('id').setValue(link.id);
        // this.form.get('studentid').setValue(this.myprofile.id);
        this.form.get('activityid').setValue((this.links == null) ? null : this.links[0].activityid);

        this.form.get('linkname').setValue(link.linkname);
        this.form.get('linkdescription').setValue(link.linkdescription);
        this.form.get('linkurl').setValue(link.linkurl);
        console.log(this.form);
        overlaypanel.show(event);
    }

    onSubmit(event, overlaypanel: OverlayPanel): void { 

        var aLink:ILink = {
            id: this.form.value['id'],
            studentid: this.form.value['studentid'],
            activityid: this.form.value['activityid'],
            linkname: this.form.value['linkname'],
            linkdescription: this.form.value['linkdescription'],
            linkurl: this.form.value['linkurl']
        };

        this.form.get('studentid').setValue(this.myprofile.id);

        console.log(aLink);
        console.log(JSON.stringify(aLink));

        //send to edit service to post
        if (this.editmode == 'add')
        {
            this._spDataService.postStudentLink(aLink)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }
        else
        {
            this._spDataService.putStudentLink(aLink)
                .subscribe(
                    (response) => {},
                    (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                    () => {this.refreshData();}
                );
        }

        //Hide overlay
        this.form.reset();
        overlaypanel.hide();
    }

    onCancel(event, overlaypanel: OverlayPanel): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                overlaypanel.hide();
            }
        });
    }

    //This will only get called if the your has already confirmed the delete
    deleteRow(id:number) {
        this._spDataService.deleteStudentLink(id)
            .subscribe(
                (response) => {},
                (err) => {console.log("ERROR in onSubmit: Post: "+ err);},
                () => {this.refreshData();}
            );
    }

    refreshData(){
        this._spDataService.getLinks(this.myprofile.id).subscribe(links => this.links = links, error => this.errorMessage = <any>error);
    }
}