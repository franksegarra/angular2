import { Component, Input, OnInit } from '@angular/core';

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
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + "Where I'll be";
    };
}