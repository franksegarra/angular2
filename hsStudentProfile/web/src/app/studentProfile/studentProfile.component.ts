import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile } from '../models/IProfile';
import { IClass } from '../models/Class';
import { IExtraCurricular } from '../models/IExtraCurricular';
import { IScheduleItem } from '../models/ScheduleItem';
import { ILink } from '../models/ILink';
import { IBBProfile } from '../models/BBProfile';
import { IProfilePictures } from '../models/IProfilePictures';
import { IPicture } from '../studentprofile/pictures/IPicture';
import { IVideo } from '../studentprofile/videos/IVideo';
import { ICoach } from '../models/ICoach';
import { IHittingStats } from '../models/IHittingStats';
import { HittingCategory } from '../models/HittingCategory';
import { Observable } from 'rxjs/Observable';
import 'rxjs/util/isNumeric';

//Data and auth services
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { spDataService } from './services/spdata.service';

@Component({
    selector: 'pp-studentprofile',
    moduleId: module.id,
    templateUrl:  'studentprofile.component.html'
})
export class StudentProfileComponent implements OnInit, OnDestroy {
    private studentInfo: any;
    private studentProfileName: string;
    private studentId: number;
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
    public picturelist:Array<IPicture> = [];
    public videolist:Array<IVideo> = [];
    private coaches: ICoach[];
    private hittingstats: IHittingStats[];
    public hittingcategories: Array<HittingCategory> = []; 

    componentToShow: string = 'stats';

    constructor(private route: ActivatedRoute, private _dataService: DataService, private _authService: AuthService, private _spDataService: spDataService) {
    }
    
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {this.studentInfo = params['id'];});  

        //If we are logged in as a user, get our profile
        if (this._authService.isLoggedIn()){
            this.getStudentProfile();
        }
        else {
        //If we are not logged in as a user, then log in as guest and get the profile that was passed in
            this._authService.login('guest', 'guest')
                .subscribe(
                    (result)=> {},
                    (err) => {},
                    () => {this.getStudentProfile();}
                );
        }
    }

    getStudentProfile(){
        //Main Profile and stats profile.  Get these first
        if (!isNaN(this.studentInfo))
        {
            this.studentId = this.studentInfo
            this._dataService.getProfile(this.studentId)
                .subscribe(
                    //For every response
                    (response) => {
                        // Need to wait for response
                        this.myprofile = response;
                        this.getRestOfData();
                    },
                    //On Error
                    (err) => {console.log("ERROR in component. getStudentProfile: "+ err);},
                    //When observable closes
                    () => {}
                )
        }
        else
        {
            this.studentProfileName = this.studentInfo;
            this._dataService.getProfileByName(this.studentProfileName)
                .subscribe(
                    //For every response
                    (response) => {
                        // Need to wait for response
                        this.myprofile = response;
                        this.studentId = this.myprofile.id;
                        this.getRestOfData();
                    },
                    //On Error
                    (err) => {console.log("ERROR in component. getStudentProfile: "+ err);},
                    //When observable closes
                    () => {})
        }
    }

    getRestOfData() {
        //Set logged in flag in profile
        if (this.myprofile.id == this._authService.userid)
            this.myprofile.loggedin = true;
        else
            this.myprofile.loggedin = false;

        //Main Profile and stats profile.  Get these first
        this._spDataService.getBBProfile(this.studentId).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);

        //For Academics
        this._dataService.getClasses(this.studentId).subscribe(classes => this.classes = classes, error => this.errorMessage = <any>error);
        this._dataService.getExtraCurricular(this.studentId).subscribe(classes => this.ec = classes, error => this.errorMessage = <any>error);

        //Pictures
        this._dataService.getPictures(this.studentId).subscribe(pics => this.picturelist = pics, error => this.errorMessage = <any>error);

        //Videos
        this._dataService.getVideos(this.studentId).subscribe(vids => this.videolist = vids, error => this.errorMessage = <any>error);

        //For Schedule
        this._spDataService.getSchedule(this.studentId).subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);

        //Links
        this._spDataService.getLinks(this.studentId).subscribe(links => this.links = links, error => this.errorMessage = <any>error);

        //Stats
        this._spDataService.getHittingStats(this.studentId)
                .subscribe(
                    //For every response
                    (stats) => {
                        // Need to wait for response
                        this.hittingstats = stats;
                        this.hittingcategories = this._spDataService.createStatsCategories(this.hittingstats);
                    },
                    //On Error
                    (err) => {console.log("ERROR in component. save to db: "+ err);},
                    //When observable closes
                    () => {}
                )
        

        //Coaches
        this._spDataService.getCoaches(this.studentId).subscribe(coaches => this.coaches = coaches, error => this.errorMessage = <any>error);

        //profilepics
        this._dataService.getProfilePictures(this.studentId).subscribe(pics => this.profilepics = pics, error => this.errorMessage = <any>error);

        this._dataService.loadLookupData();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }    

    //Controls which component is visible by setting componentToShow variable
    setVisibleComponent(visibleItem: string){
        this.componentToShow = visibleItem;
    }
}
