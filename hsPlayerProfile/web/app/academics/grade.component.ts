import { Component, Input, OnInit } from '@angular/core';
import { IClass } from './class';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html',
    styleUrls: ['academics.component.css']
})
export class GradeComponent { 
    @Input() grade: number;
    @Input() classes: IClass[];
}