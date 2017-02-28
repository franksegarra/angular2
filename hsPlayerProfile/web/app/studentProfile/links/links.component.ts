import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { ILink } from '../../models/ILink';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html'
})
export class LinksComponent implements OnInit { 
    @Input() myprofile: IProfile;
    pageTitle: string;
    errorMessage: string;
    links: ILink[];

    constructor(private _dataService: DataService) {
    };

    ngOnInit(): void {
        
        //Set page title
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Links';
        
        //Get data
        this._dataService.getLinks( this.myprofile.id ).subscribe(links => this.links = links, error => this.errorMessage = <any>error);
    };

}