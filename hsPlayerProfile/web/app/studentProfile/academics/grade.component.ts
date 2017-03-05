import { Component, Input } from '@angular/core';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html'
})
export class GradeComponent { 
    @Input() grade: number;
    @Input() classes: IClass[];
    average: number;
}