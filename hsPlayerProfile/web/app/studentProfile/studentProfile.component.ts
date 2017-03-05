import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Data service
import { DataService } from '../services/data.service';
import { StatsService } from './stats/stats.service';

@Component({
    selector: 'pp-studentprofile',
    moduleId: module.id,
    templateUrl:  'studentprofile.component.html',
    styleUrls: ['studentprofile.component.css']
})
export class StudentProfileComponent implements OnInit, OnDestroy {
    studentId: number = 1;
    private sub: any;
    pageTitle: string;
    errorMessage: string;
    myprofile: Profile;
    classes: IClass[];
    ec: IExtraCurricular[];
    schedItems: IScheduleItem[];
    links: ILink[];
    bbprofile: IBBProfile;

    componentToShow: string = 'academics';

    constructor(private route: ActivatedRoute, private _dataService: DataService, private _statsService: StatsService) {
    }
    
    ngOnInit(): void {
        // (+) converts string 'id' to a number
        this.sub = this.route.params.subscribe(params => {this.studentId = +params['id'];});  

        console.log(this.studentId);

        //Main Profile
        this._dataService.getProfile(this.studentId).subscribe(p => this.myprofile = p, error => this.errorMessage = <any>error);

        //For Academics
        this._dataService.getClasses( this.studentId ).subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
        this._dataService.getExtraCurricular( this.studentId ).subscribe(classes => this.ec = classes, error => this.errorMessage = <any>error);

        //For Schedule
        this._dataService.getSchedule(this.studentId).subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);

        //Links
        this._dataService.getLinks( this.studentId ).subscribe(links => this.links = links, error => this.errorMessage = <any>error);

        //For Stats
        this._statsService.getBBProfile(this.studentId).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);
        this._statsService.getHittingList(this.studentId);
    }
 
    ngOnDestroy() {
        this.sub.unsubscribe();
    }    

    //Controls which component is visible by setting componentToShow variable
    setVisibleComponent(visibleItem: string){
        this.componentToShow = visibleItem;
    }
}
