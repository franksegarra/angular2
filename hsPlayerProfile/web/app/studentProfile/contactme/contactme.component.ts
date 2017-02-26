import { Component, OnInit } from '@angular/core';
import { IContactMe } from './contactme';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-contactme',
    moduleId: module.id,
    templateUrl: 'contactme.component.html',
    styleUrls: ['contactme.component.css']      //../studentprofile/contactme/
})
export class ContactMeComponent { 
    
    pageTitle: string = "Contact Me";
    errorMessage: string;
    cinfo: IContactMe;

    constructor(private _dataService: DataService) {
    }

    onSubmit(form: any): void {  
        console.log('you submitted value:', form);  
    }

}