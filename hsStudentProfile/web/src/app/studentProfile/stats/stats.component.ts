import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IBBProfile } from '../../models/IBBProfile';
import { ICoach } from '../../models/ICoach';
import { HittingCategory } from '../../models/HittingCategory';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-stats',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})
export class StatsComponent { 
    @Input() myprofile: IProfile;
    @Input() bbprofile: IBBProfile;
    @Input() coaches: Array<ICoach>; 
    @Input() hittingcategories: Array<HittingCategory>; 
    pageName: string = 'Stats';

    constructor(private _spDataService: spDataService) {}
}