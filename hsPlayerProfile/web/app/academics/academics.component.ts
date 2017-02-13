import { Component } from '@angular/core';
import { GradeComponent } from './grade.component';

@Component({
    selector: 'pp-academics',
    moduleId: module.id,
    templateUrl: 'academics.component.html',
    styleUrls: ['academics.component.css']
})
export class AcademicsComponent { 
    pageTitle: string = "Academics";
}