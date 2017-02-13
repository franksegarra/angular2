import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-myprofile',
    moduleId: module.id,
    templateUrl: 'myprofile.component.html',
    styleUrls: ['myprofile.component.css']
})
export class MyProfileComponent implements OnInit { 
    
    pageTitle: string = "My Profile";
    errorMessage: string;
    myprofiles: IProfile[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit(): void {
        this._dataService.getMyProfile()
            .subscribe(p => this.myprofiles = p, 
            error => this.errorMessage = <any>error);
    };

    // onSubmit(form: any): void {  
    //     console.log('you submitted value:', form);  
    // };
}