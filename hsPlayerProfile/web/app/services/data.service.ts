import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//Global settings
import { Config } from '../config.service';

//Our Objects
import { IClass } from '../models/IClass';
import { ILink } from '../models/ILink';
import { IScheduleItem } from '../models/IScheduleItem';
import { IProfile } from '../models/IProfile';
import { IStudent } from '../models/IStudent';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Injectable()
export class DataService {
    private _classesUrl: string = Config.WEBSERVICESURL + 'studentclasses/GetByStudentId/1';              //'api/classes/classes.json';
    private _schedUrl: string  = Config.WEBSERVICESURL + 'studentschedules/GetByStudentId/1';             // 'api/schedule/schedule.json'; 
    private _linksUrl: string  = Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/1';                 //'api/links/links.json';
    private _profilesUrl: string  = Config.WEBSERVICESURL + 'studentprofile';                           //'api/profile/profile.json';                           
    private _studentsUrl: string  = Config.WEBSERVICESURL + 'student';                                    //'api/profile/profile.json';                           
    
    constructor(private _http: Http) {
    }

    //Get Classes
    getClasses(): Observable<IClass[]> {

        return this._http.get(this._classesUrl)
                    .map((response: Response) => <IClass[]>response.json())
                    .do(data => console.log('getClasses: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    // Get Links
    getLinks(): Observable<ILink[]> {

        return this._http.get(this._linksUrl)
                    .map((response: Response) => <ILink[]>response.json())
                    .do(data => console.log('getLinks: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Schedule
    getSchedule(): Observable<IScheduleItem[]> {
        return this._http.get(this._schedUrl)
                    .map((response: Response) => <IScheduleItem[]>response.json())
                    .do(data => console.log('getSchedule: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Schedule
    getStudent(id:string): Observable<IStudent> {
        return this._http.get(this._studentsUrl + '/' + id)
                    .map((response: Response) => <IStudent>response.json())
                    .do(data => console.log('getStudent: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get profile
    getProfile(id:string): Observable<IProfile> {
        return this._http.get(this._profilesUrl + '/' + id)
                    .map((response: Response) => <IProfile>response.json())
                    .first()
                    .do(data => console.log('getProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}