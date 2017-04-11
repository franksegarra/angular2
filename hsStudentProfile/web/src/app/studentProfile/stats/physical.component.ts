import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IBBProfile } from '../../models/IBBProfile';
import { Config } from '../../config.service';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-physical',
    moduleId: module.id,
    templateUrl: 'physical.component.html'
})
export class PhysicalComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() bbprofile: IBBProfile;
    statsPicUrl: string; 

    constructor(private _spDataService: spDataService) {}

    ngOnInit(): void {
        this.statsPicUrl =  Config.PICTUREFOLDER + this.bbprofile.statspicturefilename; 
    }
    
}