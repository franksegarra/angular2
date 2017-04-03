import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IScheduleItem } from '../../models/IScheduleItem';

@Component({
    selector: 'pp-schedule',
    moduleId: module.id,
    templateUrl: 'schedule.component.html'
})
export class ScheduleComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() schedItems: IScheduleItem[];
    pageTitle: string;

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstname + ' ' + this.myprofile.lastname + ' - ' + this.myprofile.graduationyear + ' - ' + "Where I'll be";
    };
}