import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IClass } from '../../models/IClass';

//Nested components
import { GradeComponent } from './grade.component';
import { TestScoresComponent } from './testscores.component';

//Data service
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-academics',
    moduleId: module.id,
    templateUrl: 'academics.component.html'
})
export class AcademicsComponent { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    classes: IClass[];
    errorMessage: string;

    constructor(private _dataService: DataService) {
    };

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Academics';
        this._dataService.getClasses().subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
    }
}