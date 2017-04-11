import { Component, Input, OnInit } from '@angular/core';
import { spDataService } from '../services/spdata.service';
import { IProfile } from '../../models/IProfile';

@Component({
    selector: 'pp-header',
    moduleId: module.id,
    templateUrl: 'spheader.component.html'
})
export class SpHeaderComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() pageName: string;
    pageTitle: string;

    constructor(private _spDataService: spDataService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstname + ' ' + this.myprofile.lastname + ' - ' + this.myprofile.graduationyear + ' - ' + this.pageName;
    };
}