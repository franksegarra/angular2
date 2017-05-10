import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/util/isNumeric';

//import { IBBProfile } from '../models/BBProfile';

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
    
    //private bbprofile: IBBProfile;

    componentToShow: string = 'academics';

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
            this._spDataService.setProfile(this.studentId)
                .subscribe(
                    //For every response
                    (response) => {
                        if(response==true)
                        {
                            this.getRestOfData();
                        }
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
            this._spDataService.setProfileByName(this.studentProfileName)
                .subscribe(
                    //For every response
                    (response) => {
                        this.studentId = this._spDataService.myprofile.id;
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
        if (this._spDataService.myprofile.id == this._authService.userid)
            this._spDataService.myprofile.loggedin = true;
        else
            this._spDataService.myprofile.loggedin = false;

        this._spDataService.getStudentData(this.studentId);
        this._dataService.loadLookupData();

        //Main Profile and stats profile.  Get these first
        //this._spDataService.getBBProfile(this.studentId).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);

        // //For Schedule
        // this._spDataService.getSchedule(this.studentId).subscribe(schedItems => this.schedItems = schedItems, error => this.errorMessage = <any>error);
        // //Links
        // this._spDataService.getLinks(this.studentId).subscribe(links => this.links = links, error => this.errorMessage = <any>error);
        // //Coaches
        // this._spDataService.getCoaches(this.studentId).subscribe(coaches => this.coaches = coaches, error => this.errorMessage = <any>error);

        // //Stats
        // this._spDataService.getHittingStats(this.studentId)
        //         .subscribe(
        //             //For every response
        //             (stats) => {
        //                 // Need to wait for response
        //                 this.hittingstats = stats;
        //                 this.hittingcategories = this._spDataService.createStatsCategories(this.hittingstats);
        //             },
        //             //On Error
        //             (err) => {console.log("ERROR in component. save to db: "+ err);},
        //             //When observable closes
        //             () => {}
        //         )
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }    

    //Controls which component is visible by setting componentToShow variable
    setVisibleComponent(visibleItem: string){
        this.componentToShow = visibleItem;
    }
}
