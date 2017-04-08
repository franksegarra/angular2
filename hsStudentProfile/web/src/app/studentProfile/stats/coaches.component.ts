import { Component, Input } from '@angular/core';
import { ICoach } from '../../models/ICoach';
import { spEditService } from '../services/spedit.service';

@Component({
    selector: 'pp-coaches',
    moduleId: module.id,
    templateUrl: 'coaches.component.html'
})
export class CoachesComponent  { 
    @Input() coaches: Array<ICoach>;

    constructor(private _spEditService: spEditService) {}
}