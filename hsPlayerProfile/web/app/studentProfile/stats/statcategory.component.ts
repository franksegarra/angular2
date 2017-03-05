import { Component, Input } from '@angular/core';
import { HittingCategory } from '../../models/HittingCategory';

@Component({
    selector: 'pp-statcategory',
    moduleId: module.id,
    templateUrl: 'statcategory.component.html'
})
export class StatCategory  { 
    @Input() hittingcategory: HittingCategory;
}