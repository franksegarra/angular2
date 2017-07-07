import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

//Global settings
import { Config } from '../config.service';

//Our Objects
import { IState } from '../models/State';
import { IActivity } from '../models/activity';
import { IActivityType } from '../models/activitytype';

import { IContactMe } from '../models/IContactMe';
import { IEmail } from '../models/IEmail';
import { IFeedback } from '../models/IFeedback';

//Auth service
import { AuthService }  from './auth.service';

interface IIPAddress { ip: string };

@Injectable()
export class DataService {
    public ipaddress: IIPAddress;
    public states: IState[];
    public activities: IActivity[];
    public activitytypes: IActivityType[];
    private errorMessage: string;
    private options: RequestOptions;

    constructor(private _http: Http, private authService: AuthService) {
        this.getClientIPAddress().subscribe(p => this.ipaddress = p, error => this.errorMessage = <any>error);
    }

    loadLookupData() {
        this.getStates().subscribe(s => this.states = s, error => this.errorMessage = <any>error);
        this.getActivity().subscribe(a => this.activities = a, error => this.errorMessage = <any>error);
        this.getActivityType().subscribe(a => this.activitytypes = a, error => this.errorMessage = <any>error);
    }

    getStates() {
        return this._http.get(Config.WEBSERVICESURL + 'states', this.authService.getAuthHeader())
                    .map((response: Response) => <IState[]>response.json())
                    .catch(this.handleError);
    }

    getActivity() {
        return this._http.get(Config.WEBSERVICESURL + 'activity', this.authService.getAuthHeader())
                    .map((response: Response) => <IActivity[]>response.json())
                    .catch(this.handleError);
    }

    getActivityType() {
        return this._http.get(Config.WEBSERVICESURL + 'activitytype', this.authService.getAuthHeader())
                    .map((response: Response) => <IActivityType[]>response.json())
                    .catch(this.handleError);
    }

    poststudentContact(msg: IContactMe): Observable<any> {
        msg.ipaddress = this.ipaddress.ip;
        let body = JSON.stringify(msg);
        return this._http.post(Config.WEBSERVICESURL + 'studentcontact/', body, this.authService.getAuthHeader())
            .map(res =>  res.json().data)
            .catch(this.handleError);
    }

    postSiteFeedback(msg: IFeedback): Observable<any> {
        msg.ipaddress = this.ipaddress.ip;
        let body = JSON.stringify(msg);
        return this._http.post(Config.WEBSERVICESURL + 'sitefeedback/', body, this.authService.getAuthHeader())
            .map(res =>  res.json().data)
            .catch(this.handleError);
    }

    sendEMailToStudent(msg: IContactMe, studentemail: string): Observable<any> {
        var mail: IEmail = {
            from : msg.contactemail,
            to : studentemail,
            cc : msg.contactemail,
            subject : msg.contactname + ' has sent you a message.',
            text : msg.message 
        };
    
        let body = JSON.stringify(mail);

        return this._http.post(Config.WEBSERVICESURL + 'email/', body, this.authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    getClientIPAddress(): Observable<IIPAddress> {
        return this._http.get('https://api.ipify.org?format=json')
            .map((response: Response) => <IIPAddress>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('error in data.service.ts');
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}