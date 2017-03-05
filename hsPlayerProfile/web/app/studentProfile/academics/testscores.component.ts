import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../config.service';

@Component({
    selector: 'pp-testscores',
    moduleId: module.id,
    templateUrl: 'testscores.component.html'
})
export class TestScoresComponent implements OnInit { 
    @Input() myprofile: IProfile;
    profilePicUrl: string; 

    ngOnInit(): void {
        this.profilePicUrl =  Config.PICTUREFOLDER + this.myprofile.profilepicturefilename;
    }
}