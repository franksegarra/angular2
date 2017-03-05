import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../config.service';

@Component({
    selector: 'pp-physical',
    moduleId: module.id,
    templateUrl: 'physical.component.html'
})
export class PhysicalComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() bbprofile: IBBProfile;
    statsPicUrl: string; 

    ngOnInit(): void {
        this.statsPicUrl =  Config.PICTUREFOLDER + this.bbprofile.statspicturefilename; 
    }
    
}