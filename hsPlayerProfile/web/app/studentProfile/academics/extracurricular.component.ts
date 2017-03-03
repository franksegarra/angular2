import { Component, Input, OnInit  } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IExtraCurricular } from '../../models/IExtraCurricular';
import { Config } from '../../config.service';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'pp-extracurricular',
    moduleId: module.id,
    templateUrl: 'extracurricular.component.html'
})
export class ExtraCurricularComponent implements OnInit  { 
    @Input() myprofile: IProfile;
    ec: IExtraCurricular[];
    errorMessage: string;

    constructor(private _dataService: DataService) {
    };

    ngOnInit(): void {
        this._dataService.getExtraCurricular( this.myprofile.id ).subscribe(classes => this.ec = classes, error => this.errorMessage = <any>error);
    }
    
}