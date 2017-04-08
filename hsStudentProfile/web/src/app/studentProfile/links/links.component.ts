import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { ILink } from '../../models/ILink';
import { spEditService } from '../services/spedit.service';

@Component({
    selector: 'pp-links',
    moduleId: module.id,
    templateUrl: 'links.component.html'
})
export class LinksComponent { 
    @Input() myprofile: IProfile;
    @Input() links: ILink[];
    pageName: string = 'Links';

    constructor(private _spEditService: spEditService) {}
}