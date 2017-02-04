import { Component, OnInit } from '@angular/core';
import { IScheduleItem } from './scheduleItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-schedule',
    moduleId: module.id,
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.css']
})
export class ScheduleComponent implements OnInit { 
    
    pageTitle: string = "Where I'll be";
    errorMessage: string;
    schedItems: IScheduleItem[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit(): void {
        this._dataService.getSchedule()
            .subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);
    };
}