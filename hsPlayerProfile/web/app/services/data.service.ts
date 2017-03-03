import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//Global settings
import { Config } from '../config.service';

//Our Objects
import { IClass } from '../models/IClass';
import { IExtraCurricular } from '../models/IExtraCurricular';
import { ILink } from '../models/ILink';
import { IScheduleItem } from '../models/IScheduleItem';
import { IProfile } from '../models/IProfile';
import { IStudent } from '../models/IStudent';
import { IBBProfile } from '../models/IBBProfile';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@Injectable()
export class DataService {
    private _classesUrl: string = Config.WEBSERVICESURL + 'studentclasses/GetByStudentId/';
    private _ecUrl: string = Config.WEBSERVICESURL + 'studentextracurricular/GetByStudentId/';
    private _schedUrl: string  = Config.WEBSERVICESURL + 'studentschedwithactivity/GetByStudentId/';
    private _linksUrl: string  = Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/';
    private _profilesUrl: string  = Config.WEBSERVICESURL + 'studentprofile/';
    private _studentsUrl: string  = Config.WEBSERVICESURL + 'student/';
    private _bbprofilesUrl: string  = Config.WEBSERVICESURL + 'studentbaseballprofile/GetByStudentId/';
        
    constructor(private _http: Http) {
    }

    //Get Classes
    getClasses(id:number): Observable<IClass[]> {

        return this._http.get(this._classesUrl + id)
                    .map((response: Response) => <IClass[]>response.json())
                    .do(data => console.log('getClasses: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Extra Curricular
    getExtraCurricular(id:number): Observable<IExtraCurricular[]> {

        return this._http.get(this._ecUrl + id)
                    .map((response: Response) => <IExtraCurricular[]>response.json())
                    .do(data => console.log('getExtraCurricular: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    // Get Links
    getLinks(id:number): Observable<ILink[]> {

        return this._http.get(this._linksUrl + id)
                    .map((response: Response) => <ILink[]>response.json())
                    .do(data => console.log('getLinks: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Schedule
    getSchedule(id:number): Observable<IScheduleItem[]> {
        return this._http.get(this._schedUrl + id)
                    .map((response: Response) => <IScheduleItem[]>response.json())
                    .do(data => console.log('getSchedule: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Schedule
    getStudent(id:number): Observable<IStudent> {
        return this._http.get(this._studentsUrl + id)
                    .map((response: Response) => <IStudent>response.json())
                    .do(data => console.log('getStudent: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get profile
    getProfile(id:number): Observable<IProfile> {
        return this._http.get(this._profilesUrl + id)
                    .map((response: Response) => <IProfile>response.json())
                    .first()
                    .do(data => console.log('getProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    //Get profile
    getBBProfile(id:number): Observable<IBBProfile[]> {
        return this._http.get(this._bbprofilesUrl + id)
                    .map((response: Response) => <IBBProfile[]>response.json())
                    .first()
                    .do(data => console.log('getBBProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}