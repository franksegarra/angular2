import { Component, Input } from '@angular/core';
import { IClass } from './class';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html',
    styleUrls: ['academics.component.css']
})
export class GradeComponent { 
    errorMessage: string;
    @Input() classes: IClass[];
    @Input() grade: number;
}