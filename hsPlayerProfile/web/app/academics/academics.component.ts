import { Component, OnInit } from '@angular/core';
import { IClass } from './class';
import { IProfile } from '../profile/IProfile';

//Nested components
import { GradeComponent } from './grade.component';
import { TestScoresComponent } from './testscores.component';

//Data service
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-academics',
    moduleId: module.id,
    templateUrl: 'academics.component.html',
    styleUrls: ['academics.component.css']
})
export class AcademicsComponent implements OnInit { 
    pageTitle: string = "Academics";
    classes: IClass[];
    myprofile: IProfile[];
    errorMessage: string;

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
        this._dataService.getClasses().subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
        this._dataService.getMyProfile().subscribe(p => this.myprofile = p, error => this.errorMessage = <any>error);
    }  
}