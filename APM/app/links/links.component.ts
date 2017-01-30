import { Component, OnInit } from '@angular/core';
import { ILink } from './link';
import { DataService } from '../services/data.service';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html',
    styleUrls: ['links.component.css']
})
export class LinksComponent implements OnInit { 
    
    pageTitle: string = "Links";
    errorMessage: string;
    links: ILink[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit(): void {
        this._dataService.getLinks()
            .subscribe(links => this.links = links, error => this.errorMessage = <any>error);
    };

}