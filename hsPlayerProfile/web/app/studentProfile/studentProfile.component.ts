import { Component, OnInit } from '@angular/core';
import { IStudent } from '../profile/IStudent';
import { Student } from '../profile/Student';
import { DataService } from '../services/data.service';

//Nested components
import { ContactMeComponent } from './contactme/contactme.component'
//import { AcademicsComponent } from '../academics/academics.component'

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
    studentprofile: Student;

    constructor(private _dataService: DataService) {
    }
    
    ngOnInit(): void {
        this.studentprofile = new Student();
        this.studentprofile.firstName = 'Francis';
        this.studentprofile.lastName = 'Segarra';
        this.studentprofile.graduationYear =2018;

        //this._dataService.getStudent(this.studentId).subscribe(p => this.studentprofile = p, error => this.errorMessage = <any>error);
    }
}
