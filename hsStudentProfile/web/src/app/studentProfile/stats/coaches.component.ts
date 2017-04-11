import { Component, Input } from '@angular/core';
import { ICoach } from '../../models/ICoach';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-coaches',
    moduleId: module.id,
    templateUrl: 'coaches.component.html'
})
export class CoachesComponent  { 
    @Input() coaches: Array<ICoach>;

    constructor(private _spDataService: spDataService) {}
}