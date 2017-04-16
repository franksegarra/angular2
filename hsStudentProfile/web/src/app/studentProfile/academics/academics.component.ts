import { Component, Input } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IClass } from '../../models/Class';
import { IExtraCurricular } from '../../models/IExtraCurricular';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-academics',
    moduleId: module.id,
    templateUrl: 'academics.component.html'
})
export class AcademicsComponent { 
    @Input() myprofile: IProfile;
    @Input() classes: IClass[];
    @Input() ec: IExtraCurricular[];
    pageName: string = 'Academics';

    constructor(private _spDataService: spDataService) {}
}