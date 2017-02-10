import { Component, Input, OnInit } from '@angular/core';
import { IClass } from './class';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html',
    styleUrls: ['academics.component.css']
})
export class GradeComponent implements OnInit { 
    @Input() grade: number;
    classes: IClass[];
    errorMessage: string;
   
    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
        this._dataService.getClasses()
            .subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
    }  
   
}