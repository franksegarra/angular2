import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { Config } from '../../config.service';
import { spEditService } from '../services/spedit.service';

@Component({
    selector: 'pp-testscores',
    moduleId: module.id,
    templateUrl: 'testscores.component.html'
})
export class TestScoresComponent implements OnInit { 
    @Input() myprofile: IProfile;
    profilePicUrl: string; 

    constructor(private _spEditService: spEditService) {}

    ngOnInit(): void {
        this.profilePicUrl =  Config.PICTUREFOLDER + this.myprofile.profilepicturefilename;
    }
}