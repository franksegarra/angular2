import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../profile/IProfile';

@Component({
    selector: 'pp-testscores',
    moduleId: module.id,
    templateUrl: 'testscores.component.html',
    styleUrls: ['academics.component.css']
})
export class TestScoresComponent { 
    @Input() myprofile: IProfile;
}