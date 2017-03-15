import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { ILink } from '../../models/ILink';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html'
})
export class LinksComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() links: ILink[];
    pageTitle: string;

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Links';
    };
}