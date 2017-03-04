import { Component, Input, OnInit } from '@angular/core';
import { IHittingStats } from '../../models/IHittingStats';

@Component({
    selector: 'pp-statcategory',
    moduleId: module.id,
    templateUrl: 'statcategory.component.html'
})
export class StatCategory  { 
    @Input() category: string;
    @Input() hittinglist: IHittingStats[];
}