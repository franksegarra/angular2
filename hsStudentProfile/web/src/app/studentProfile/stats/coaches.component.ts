import { Component, Input } from '@angular/core';
import { ICoach } from '../../models/ICoach';

@Component({
    selector: 'pp-coaches',
    moduleId: module.id,
    templateUrl: 'coaches.component.html'
})
export class CoachesComponent  { 
    @Input() coaches: Array<ICoach>;
}