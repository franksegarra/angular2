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
    studentId: string = '1';
    pageTitle: string;
    errorMessage: string;
    myprofile: Profile;

    componentToShow: string = 'videos';

    constructor(private _dataService: DataService) {
    }
    
    ngOnInit(): void {
        this.myprofile = new Profile();
        this.myprofile.id = 1;
        this.myprofile.firstName = 'Francis';
        this.myprofile.lastName = 'Segarra';
        this.myprofile.primaryEmail = 'segarraf18@gmail.com';
        this.myprofile.graduationYear =2018;
        this.myprofile.highSchoolName = 'Carmel High School';

        //this._dataService.getStudent(this.studentId).subscribe(p => this.studentprofile = p, error => this.errorMessage = <any>error);
    }

    //Controls which component is visible by setting componentToShow variable
    setVisibleComponent(visibleItem: string){
        this.componentToShow = visibleItem;
    }
}
