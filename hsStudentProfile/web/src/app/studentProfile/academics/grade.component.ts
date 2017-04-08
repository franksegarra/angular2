import { Component, Input } from '@angular/core';
import { IClass } from '../../models/IClass';
import { spEditService } from '../services/spedit.service';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html'
})
export class GradeComponent { 
    @Input() grade: number;
    @Input() classes: IClass[];
    average: number;

    constructor(private _spEditService: spEditService) {}
}