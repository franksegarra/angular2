import { Component, Input } from '@angular/core';
import { IClass } from '../../models/IClass';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html'
})
export class GradeComponent { 
    @Input() grade: number;
    @Input() classes: IClass[];
    average: number;

    constructor(private _spDataService: spDataService) {}
}