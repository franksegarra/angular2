import { Component, OnInit } from '@angular/core';
import { IClass } from './class';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-academics',
    moduleId: module.id,
    templateUrl: 'academics.component.html',
    styleUrls: ['academics.component.css']
})
export class AcademicsComponent implements OnInit { 
    
    pageTitle: string = "Academics";
    errorMessage: string;
    classes: IClass[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit(): void {
        this._dataService.getClasses()
            .subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
    };

}