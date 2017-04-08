import { Component, Input } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IScheduleItem } from '../../models/IScheduleItem';
import { spEditService } from '../services/spedit.service';

@Component({
    selector: 'pp-schedule',
    moduleId: module.id,
    templateUrl: 'schedule.component.html'
})
export class ScheduleComponent { 
    @Input() myprofile: IProfile;
    @Input() schedItems: IScheduleItem[];
    pageName: string = "Where I'll be";

    constructor(private _spEditService: spEditService) {}
}