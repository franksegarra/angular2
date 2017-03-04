import { Component, OnInit } from '@angular/core';
import { IProfile } from '../models/IProfile';
import { Profile } from '../models/Profile';

//Data service
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-studentprofile',
    moduleId: module.id,
    templateUrl:  'studentprofile.component.html',
    styleUrls: ['studentprofile.component.css']
})
export class StudentProfileComponent implements OnInit {
    studentId: number = 1;
    pageTitle: string;
    errorMessage: string;
    myprofile: Profile;

    componentToShow: string = 'stats';

    constructor(private _dataService: DataService) {
    }
    
    ngOnInit(): void {
        this._dataService.getProfile(this.studentId).subscribe(p => this.myprofile = p, error => this.errorMessage = <any>error);
    }

    //Controls which component is visible by setting componentToShow variable
    setVisibleComponent(visibleItem: string){
        this.componentToShow = visibleItem;
    }
}
