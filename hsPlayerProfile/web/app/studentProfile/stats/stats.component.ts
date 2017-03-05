import { Component, Input, OnInit } from '@angular/core';
import { HittingCategory } from '../../models/HittingCategory';

@Component({
    selector: 'pp-stats',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})
export class StatsComponent { 
    @Input() myprofile: IProfile;
    @Input() bbprofile: IBBProfile;
    @Input() hittingcategories: Array<HittingCategory>; 
    pageTitle: string;
    
    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Stats';
    }
}