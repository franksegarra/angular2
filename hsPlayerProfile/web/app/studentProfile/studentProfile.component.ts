import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile } from '../models/IProfile';
import { IClass } from '../models/IClass';
import { IExtraCurricular } from '../models/IExtraCurricular';
import { IScheduleItem } from '../models/IScheduleItem';
import { ILink } from '../models/ILink';
import { IBBProfile } from '../models/IBBProfile';
import { IProfilePictures } from '../models/IProfilePictures';

//Data service
import { DataService } from '../services/data.service';
import { StatsService } from './stats/stats.service';

@Component({
    selector: 'pp-studentprofile',
    moduleId: module.id,
    templateUrl:  'studentprofile.component.html'
})
export class StudentProfileComponent implements OnInit, OnDestroy {
    private studentId: number = 1;
    private sub: any;
    private pageTitle: string;
    private errorMessage: string;
    private myprofile: IProfile;
    private classes: IClass[];
    private ec: IExtraCurricular[];
    private schedItems: IScheduleItem[];
    private links: ILink[];
    private bbprofile: IBBProfile;
    private profilepics: IProfilePictures[];

    componentToShow: string = 'academics';

    constructor(private route: ActivatedRoute, private _dataService: DataService, private _statsService: StatsService) {
    }
    
    ngOnInit(): void {
        
        // (+) converts string 'id' to a number
        this.sub = this.route.params.subscribe(params => {this.studentId = +params['id'];});  

        //Main Profile and stats profile.  Get these first
        this._dataService.getProfile(this.studentId).subscribe(p => this.myprofile = p, error => this.errorMessage = <any>error);
        this._statsService.getBBProfile(this.studentId).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);
        //this._dataService.getProfileByName('francissegarra').subscribe(p => this.myprofile = p, error => this.errorMessage = <any>error);

        //For Academics
        this._dataService.getClasses( this.studentId ).subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
        this._dataService.getExtraCurricular( this.studentId ).subscribe(classes => this.ec = classes, error => this.errorMessage = <any>error);

        //For Schedule
        this._dataService.getSchedule(this.studentId).subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);

        //Links
        this._dataService.getLinks(this.studentId ).subscribe(links => this.links = links, error => this.errorMessage = <any>error);

        //Stats
        this._statsService.getHittingList(this.studentId);

        //profilepics
        this._dataService.getProfilePictures(this.studentId ).subscribe(pics => this.profilepics = pics, error => this.errorMessage = <any>error);
    }
 
    ngOnDestroy() {
        this.sub.unsubscribe();
    }    

    //Controls which component is visible by setting componentToShow variable
    setVisibleComponent(visibleItem: string){
        this.componentToShow = visibleItem;
    }
}
