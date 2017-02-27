import { Component, Input, OnInit } from '@angular/core';
import { IClass } from '../../models/IClass';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html'
})
export class GradeComponent { 
    @Input() grade: number;
    @Input() classes: IClass[];
}