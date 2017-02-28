import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IScheduleItem } from '../../models/IScheduleItem';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-schedule',
    moduleId: module.id,
    templateUrl: 'schedule.component.html'
})
export class ScheduleComponent implements OnInit { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    errorMessage: string;
    schedItems: IScheduleItem[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit(): void {

        //Set page title
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + "Where I'll be";

        //Get data
        this._dataService.getSchedule( this.myprofile.id ).subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);
    };
}