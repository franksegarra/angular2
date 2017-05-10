import { Component } from '@angular/core';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-stats',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})
export class StatsComponent { 
    pageName: string = 'Stats';

    constructor(private _spDataService: spDataService) {}
}