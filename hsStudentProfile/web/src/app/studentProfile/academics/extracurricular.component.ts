import { Component, Input } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IExtraCurricular } from '../../models/IExtraCurricular';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-extracurricular',
    moduleId: module.id,
    templateUrl: 'extracurricular.component.html'
})
export class ExtraCurricularComponent { 
    @Input() myprofile: IProfile;
    @Input() ec: IExtraCurricular[];

    constructor(private _spDataService: spDataService) {}
}