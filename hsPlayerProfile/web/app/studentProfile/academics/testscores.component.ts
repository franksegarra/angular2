import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';

@Component({
    selector: 'pp-testscores',
    moduleId: module.id,
    templateUrl: 'testscores.component.html'
})
export class TestScoresComponent { 
    @Input() myprofile: IProfile;
}