import { Component, Input, OnInit } from '@angular/core';
import { spEditService } from '../services/spedit.service';
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

    constructor(private _spEditService: spEditService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstname + ' ' + this.myprofile.lastname + ' - ' + this.myprofile.graduationyear + ' - ' + this.pageName;
    };
}