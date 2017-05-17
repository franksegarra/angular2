import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { SelectItem } from 'primeng/primeng';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

//Authorization service
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

//Global settings
import { Config } from '../../config.service';

//Our Objects
import { IProfile } from '../../models/IProfile';

import { IStudent } from '../../models/IStudent';
import { IScheduleItem } from '../../models/ScheduleItem';
import { IStudentSchedule } from '../../models/StudentSchedule';
import { ILink } from '../../models/ILink';
import { IBBProfile } from '../../models/BBProfile';
import { ICoach } from '../../models/ICoach';
import { IHittingStats } from '../../models/IHittingStats';
import { HittingCategory } from '../../models/HittingCategory';
import { IClass } from '../../models/Class';
import { IExtraCurricular } from '../../models/IExtraCurricular';
import { IPicture } from '../pictures/IPicture';
import { IVideo } from '../videos/IVideo';
import { IProfilePictures } from '../../models/IProfilePictures';


@Injectable()
export class spDataService {
    //Student Profile Entities
    public myprofile: IProfile;
    public classes: IClass[] = [];
    public ec: IExtraCurricular[] = [];
    public videolist:IVideo[] = [];
    public picturelist:IPicture[] = [];
    public profilepics: IProfilePictures[] = [];
    public schedItems: IScheduleItem[] = []; 
    public links: ILink[];
    public bbprofile: IBBProfile;
    public coaches: ICoach[];
    public hittingstats: IHittingStats[];
    public hittingcategories: Array<HittingCategory> = []; 
    

    //Lookups
    private states: SelectItem[] = [];
    private activities: SelectItem[] = [];
    private activitytypes: SelectItem[] = [];
    private rlList: SelectItem[] = [];
    private gradesList: SelectItem[] = [];
    
    constructor(private _http: Http, private _authService: AuthService, private _dataService: DataService) {}

    //***********************************************************************/
    //Generic Http Calls
    //***********************************************************************/
    //GET id
    getDBDataById<T>(id:number, dataUrl: string): Observable<T> {
        return this._http.get(Config.WEBSERVICESURL + dataUrl + id, this._authService.getAuthHeader())
                    .map((response: Response) => <T>response.json())
                    .catch(this.handleError) ;
    }
    //GET by student id
    getDBDataByStudentId<T>(studentId:number, dataUrl: string): Observable<T[]> {
        return this._http.get(Config.WEBSERVICESURL + dataUrl + studentId, this._authService.getAuthHeader())
                    .map((response: Response) => <T[]>response.json())
                    .catch(this.handleError) ;
    }
    //POST
    postDBRow<T>(newItem: T, dataUrl: string): Observable<any> {
        let body = JSON.stringify(newItem);
        return this._http.post(Config.WEBSERVICESURL + dataUrl, body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }
    //PUT
    putDBRow<T>(item: T, id:number, dataUrl: string): Observable<any> {
        let body = JSON.stringify(item);
        return this._http.put(Config.WEBSERVICESURL + dataUrl + id.toString(), body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }
    //DELETE
    deleteDBRow(id:number, dataUrl: string): Observable<any> {
        return this._http.delete(Config.WEBSERVICESURL + dataUrl + id.toString(), this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }
    //***********************************************************************/
    //Student profile
    setProfile(id:number): Observable<boolean> {
        return this._http.get(Config.WEBSERVICESURL + 'studentprofile/' + id, this._authService.getAuthHeader())
                    .map((response: Response) =>{
                            this.myprofile = <IProfile>response.json()
                            if(this.myprofile)
                                return true;
                            else
                                return false;
                    })
                    .catch(this.handleError);
    }

    setProfileByName(profilename:string): Observable<boolean> {
        return this._http.get(Config.WEBSERVICESURL + 'studentprofile/' + profilename, this._authService.getAuthHeader())
                    .map((response: Response) =>{
                            this.myprofile = <IProfile>response.json()
                            if(this.myprofile)
                                return true;
                            else
                                return false;
                    })
                    .catch(this.handleError);
    }

    getStudentData(studentid:number) {
        this.setClasses(studentid);
        this.setExtraCurricular(studentid);
        this.setVideos(studentid);
        this.setPictures(studentid);
        this.setProfilePictures(studentid);
        this.setSchedule(studentid);
        this.setLinks(studentid);
        this.setBBProfile(studentid);
        this.setCoaches(studentid);
        this.setHittingStats(studentid);
    }

    //Grades (9th, 10th, 11th, and 12th)
    getClasses(id:number): Observable<IClass[]> { return this.getDBDataByStudentId<IClass>(id, 'studentclasses/GetByStudentId/');}
    setClasses(id:number) { this.getDBDataByStudentId<IClass>(id, 'studentclasses/GetByStudentId/').subscribe(classes => this.classes = classes, error => this.handleError(error));}
    postClass(myclass: IClass): Observable<any> { return this.postDBRow<IClass>(myclass, 'studentclasses/');}
    putClass(myclass: IClass): Observable<any> { return this.putDBRow<IClass>(myclass, myclass.id, 'studentclasses/');}
    deleteClass(id:number): Observable<any> {return this.deleteDBRow(id, 'studentclasses/');}

    //extra curricular
    getExtraCurricular(id:number): Observable<IExtraCurricular[]> { return this.getDBDataByStudentId<IExtraCurricular>(id, 'studentextracurricular/GetByStudentId/');}
    setExtraCurricular(id:number) {this.getDBDataByStudentId<IExtraCurricular>(id, 'studentextracurricular/GetByStudentId/').subscribe(classes => this.ec = classes, error => this.handleError(error));}
    postExtraCurricular(myec: IExtraCurricular): Observable<any> { return this.postDBRow<IExtraCurricular>(myec, 'studentextracurricular/');}
    putExtraCurricular(myec: IExtraCurricular): Observable<any> { return this.putDBRow<IExtraCurricular>(myec, myec.id, 'studentextracurricular/');}
    deleteExtraCurricular(id:number): Observable<any> {return this.deleteDBRow(id, 'studentextracurricular/');}

    //Videos
    getVideos(id:number): Observable<IVideo[]> { return this.getDBDataByStudentId<IVideo>(id, 'studentvideos/GetByStudentId/');}
    setVideos(id:number) {this.getDBDataByStudentId<IVideo>(id, 'studentvideos/GetByStudentId/').subscribe(vids => this.videolist = vids, error => this.handleError(error));}

    //Pictures
    getPictures(id:number): Observable<IPicture[]> { return this.getDBDataByStudentId<IPicture>(id, 'studentpictures/GetByStudentId/');}
    setPictures(id:number) {this.getDBDataByStudentId<IPicture>(id, 'studentpictures/GetByStudentId/').subscribe(pics => this.picturelist = pics, error => this.handleError(error));}

    //Profile Pictures
    getProfilePictures(id:number): Observable<IProfilePictures[]> { return this.getDBDataByStudentId<IProfilePictures>(id, 'studentprofilepictures/GetByStudentId/');}
    setProfilePictures(id:number) {this.getDBDataByStudentId<IProfilePictures>(id, 'studentprofilepictures/GetByStudentId/').subscribe(pics => this.profilepics = pics, error => this.handleError(error));}

    //Schedule
    getSchedule(id:number): Observable<IScheduleItem[]> { return this.getDBDataByStudentId<IScheduleItem>(id, 'studentschedwithactivity/GetByStudentId/');}
    setSchedule(id:number) { this.getDBDataByStudentId<IScheduleItem>(id, 'studentschedwithactivity/GetByStudentId/').subscribe(schedItems => this.schedItems = schedItems, error => this.handleError(error));}
    postSchedule(sched: IStudentSchedule): Observable<any> { return this.postDBRow<IStudentSchedule>(sched, 'studentschedules/');}
    putSchedule(sched: IStudentSchedule): Observable<any> { return this.putDBRow<IStudentSchedule>(sched, sched.id, 'studentschedules/');}
    deleteSchedule(id:number): Observable<any> { return this.deleteDBRow(id, 'studentschedules/');}

    //Links
    getLinks(id:number): Observable<ILink[]> { return this.getDBDataByStudentId<ILink>(id, 'studentlinks/GetByStudentId/');}
    setLinks(id:number) { this.getDBDataByStudentId<ILink>(id, 'studentlinks/GetByStudentId/').subscribe(links => this.links = links, error => this.handleError(error));}
    postLink(link: ILink): Observable<any> { return this.postDBRow<ILink>(link, 'studentlinks/');}
    putLink(link: ILink): Observable<any> { return this.putDBRow<ILink>(link, link.id, 'studentlinks/');}
    deleteLink(id:number): Observable<any> {return this.deleteDBRow(id, 'studentlinks/');}

    //Baseball profile
    getBBProfile(id:number): Observable<IBBProfile[]> { return this.getDBDataByStudentId<IBBProfile>(id, 'studentbaseballprofile/GetByStudentId/');}
    setBBProfile(id:number) { return this.getDBDataByStudentId<IBBProfile>(id, 'studentbaseballprofile/GetByStudentId/').subscribe(p => this.bbprofile = p[0], error => this.handleError(error));}

    //Coaches
    getCoaches(id:number): Observable<ICoach[]> { return this.getDBDataByStudentId<ICoach>(id, 'studentcoaches/GetByStudentId/');}
    setCoaches(id:number) { this.getDBDataByStudentId<ICoach>(id, 'studentcoaches/GetByStudentId/').subscribe(coaches => this.coaches = coaches, error => this.handleError(error));}
    postCoach(coach: ICoach): Observable<any> { return this.postDBRow<ICoach>(coach, 'studentcoaches/');}
    putCoach(coach: ICoach): Observable<any> { return this.putDBRow<ICoach>(coach, coach.id, 'studentcoaches/');}
    deleteCoach(id:number): Observable<any> {return this.deleteDBRow(id, 'studentcoaches/');}

    //Hitting Stats
    getHittingStats(id:number): Observable<IHittingStats[]> { return this.getDBDataByStudentId<IHittingStats>(id, 'StudentBBHittingStats/GetByStudentId/');}
    setHittingStats(id:number) { this.getDBDataByStudentId<IHittingStats>(id, 'StudentBBHittingStats/GetByStudentId/')
                                        .subscribe(
                                            (hs) => { 
                                                this.hittingstats = hs; 
                                                this.createStatsCategories();
                                                // console.log(this.hittingstats);
                                            }, 
                                            (error) => this.handleError(error)
                                        );
    }

    //Student
    getStudent(id:number): Observable<IStudent> { return this.getDBDataById<IStudent>(id, 'student/');}
    postStudent(myclass: IStudent): Observable<any> { return this.postDBRow<IStudent>(myclass, 'student/');}
    putStudent(myclass: IStudent): Observable<any> { return this.putDBRow<IStudent>(myclass, myclass.id, 'student/');}

    createStatsCategories() {
        var categories:Array<string> = [];
        var hitcat: Array<HittingCategory> = []; 

        //Create local variable
        var list:Array<IHittingStats> = this.hittingstats;
        var hctemp = hitcat;

        //Get list of categories
        categories = this.hittingstats.map(function(e) { return e['category']; }).filter(function(e,i,a){return i === a.indexOf(e);});            

        //For each category create the object and fill the array
        categories.forEach(function(item) {
            var hc: HittingCategory = new HittingCategory();
            hc.category = item;
            hc.categorylist = list.filter(function(e){return e.category == item;});
            hc.createStatsCategoryTotal();

            //Add to array
            hctemp.push(hc);
        });

        this.hittingcategories = hitcat;
        // console.log(this.hittingcategories);
    }

    canEdit() {
        return this._authService.isLoggedIn();
    }

    //***********************************************************************/
    //Lookup tables
    //***********************************************************************/
    getGradesList(): SelectItem[] {
        var temp = this.gradesList;
        if (this.gradesList.length == 0)
        {
            temp.push({label:'A+', value:'A+'});
            temp.push({label:'A', value:'A'});
            temp.push({label:'A-', value:'A-'});
            temp.push({label:'B+', value:'B+'});
            temp.push({label:'B', value:'B'});
            temp.push({label:'B-', value:'B-'});
            temp.push({label:'C+', value:'C+'});
            temp.push({label:'C', value:'C'});
            temp.push({label:'D', value:'D'});
            temp.push({label:'F', value:'F'});
        }
        return this.gradesList;
    }

    getRLList(): SelectItem[] {
        var temp = this.rlList;
        if (this.rlList.length == 0)
        {
            temp.push({label:'Right', value:'R'});
            temp.push({label:'Left', value:'L'});
            temp.push({label:'Switch', value:'S'});
        }
        return this.rlList;
    }

    getStatesList(): SelectItem[] {
        var temp = this.states;
        if (this.states.length == 0)
        {
            temp.push({label:'Select State', value:null});
            this._dataService.states.forEach(function(state) {
                temp.push({label: state.state, value: state.statecode});
            });
        }
        return this.states;
    }

    getActivityList(): SelectItem[] {
        var temp = this.activities;
        if (this.activities.length == 0)
        {
            temp.push({label:'Select Activity', value:null});
            this._dataService.activities.forEach(function(activity) {
                temp.push({label: activity.activity, value: activity.id});
            });
        }
        return this.activities;
    }

    getActivityTypeList(): SelectItem[] {
        var temp = this.activitytypes;
        if (this.activitytypes.length == 0)
        {
            temp.push({label:'Select Activity Type', value:null});
            this._dataService.activitytypes.forEach(function(activitytypes) {
                temp.push({label: activitytypes.activitytype, value: activitytypes.id});
            });
        }
        return this.activitytypes;
    }    


    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}