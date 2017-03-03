import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IBBProfile } from '../../models/IBBProfile';

//Data service
import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-stats',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})
export class StatsComponent { 
    @Input() myprofile: IProfile;
    bbprofile: IBBProfile;
    errorMessage: string;
    pageTitle: string;

    constructor(private _dataService: DataService) {
    }
    
    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Stats';
        this._dataService.getBBProfile(this.myprofile.id).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);
    }
}