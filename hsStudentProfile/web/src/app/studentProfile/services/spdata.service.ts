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
import { IScheduleItem } from '../../models/ScheduleItem';
import { IStudentSchedule } from '../../models/StudentSchedule';
import { ILink } from '../../models/ILink';
import { IBBProfile } from '../../models/BBProfile';
import { ICoach } from '../../models/ICoach';
import { IHittingStats } from '../../models/IHittingStats';
import { HittingCategory } from '../../models/HittingCategory';

@Injectable()
export class spDataService {

    private states: SelectItem[] = [];
    private activities: SelectItem[] = [];
    private activitytypes: SelectItem[] = [];
    private rlList: SelectItem[] = [];

    constructor(private _http: Http, private _authService: AuthService, private _dataService: DataService) {}

    //Lookup tables
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

    //Schedule
    getSchedule(id:number): Observable<IScheduleItem[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentschedwithactivity/GetByStudentId/' + id, this._authService.getAuthHeader())
                    .map((response: Response) => <IScheduleItem[]>response.json())
                    .catch(this.handleError) ;
    }

    postSchedule(link: IStudentSchedule): Observable<any> {
        let body = JSON.stringify(link);
        return this._http.post(Config.WEBSERVICESURL + 'studentschedules/', body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    putSchedule(link: IStudentSchedule): Observable<any> {
        let body = JSON.stringify(link);
        return this._http.put(Config.WEBSERVICESURL + 'studentschedules/' + link.id.toString(), body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    deleteSchedule(id:number): Observable<any> {
        return this._http.delete(Config.WEBSERVICESURL + 'studentschedules/' + id.toString(), this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    //Links
    getLinks(id:number): Observable<ILink[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/' + id, this._authService.getAuthHeader())
                    .map((response: Response) => <ILink[]>response.json())
                    .catch(this.handleError) ;
    }

    postLink(link: ILink): Observable<any> {
        let body = JSON.stringify(link);
        return this._http.post(Config.WEBSERVICESURL + 'studentlinks/', body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    putLink(link: ILink): Observable<any> {
        let body = JSON.stringify(link);
        return this._http.put(Config.WEBSERVICESURL + 'studentlinks/' + link.id.toString(), body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    deleteLink(id:number): Observable<any> {
        return this._http.delete(Config.WEBSERVICESURL + 'studentlinks/' + id.toString(), this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    //Baseball profile
    getBBProfile(id:number): Observable<IBBProfile[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentbaseballprofile/GetByStudentId/' + id, this._authService.getAuthHeader())
                    .map((response: Response) => <IBBProfile[]>response.json())
                    .catch(this.handleError);
    }

    //Coaches
    getCoaches(id:number): Observable<ICoach[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentcoaches/GetByStudentId/' + id, this._authService.getAuthHeader())
                    .map((response: Response) => <ICoach[]>response.json())
                    .catch(this.handleError) ;
    }

    postCoach(coach: ICoach): Observable<any> {
        let body = JSON.stringify(coach);
        return this._http.post(Config.WEBSERVICESURL + 'studentcoaches/', body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    putCoach(coach: ICoach): Observable<any> {
        let body = JSON.stringify(coach);
        return this._http.put(Config.WEBSERVICESURL + 'studentcoaches/' + coach.id.toString(), body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    deleteCoach(id:number): Observable<any> {
        return this._http.delete(Config.WEBSERVICESURL + 'studentcoaches/' + id.toString(), this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    //Baseball Hitting Stats
    getHittingStats(id:number): Observable<IHittingStats[]> {
        return this._http.get( Config.WEBSERVICESURL + 'StudentBBHittingStats/GetByStudentId/' + id, this._authService.getAuthHeader())
                    .map((res:Response) => <IHittingStats[]>res.json())
                    .catch(this.handleError) ;
    };

    createStatsCategories( _hittinglist:Array<IHittingStats> ) : Array<HittingCategory> {
        var categories:Array<string> = [];
        var hittingcategories: Array<HittingCategory> = []; 

        //Create local variable
        var list:Array<IHittingStats> = _hittinglist;
        var hctemp = hittingcategories;

        //Get list of categories
        categories = _hittinglist.map(function(e) { return e['category']; }).filter(function(e,i,a){return i === a.indexOf(e);});            

        //For each category create the object and fill the array
        categories.forEach(function(item) {
            var hc: HittingCategory = new HittingCategory();
            hc.category = item;
            hc.categorylist = list.filter(function(e){return e.category == item;});
            hc.createStatsCategoryTotal();

            //Add to array
            hctemp.push(hc);
        });

        return hittingcategories;
    }

    canEdit() {
        return this._authService.isLoggedIn();
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}