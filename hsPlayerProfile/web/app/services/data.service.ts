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
import { IContactMe } from '../models/IContactMe';
import { IEmail } from '../models/IEmail';
import { IProfilePictures } from '../models/IProfilePictures';
import { IreCaptchaResponse } from '../models/IreCaptchaResponse';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

interface IIPAddress { ip: string };
interface IreCaptcha { response: string };

@Injectable()
export class DataService {

    private ipaddress: IIPAddress;
    private errorMessage: string;

    constructor(private _http: Http) {        
         this.getClientIPAddress().subscribe(p => this.ipaddress = p, error => this.errorMessage = <any>error);
    }
    
    getClientIPAddress(): Observable<IIPAddress> {
        return this._http.get('https://api.ipify.org?format=json')
            .map((response: Response) => <IIPAddress>response.json())
            //.do(data => console.log('getClientIPAddress: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    verifyRecaptchaResponse(event: any): Observable<any> {
        var recaptcharesponse: IreCaptcha = event; 
        let body = JSON.stringify(recaptcharesponse.response);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(Config.WEBSERVICESURL + 'StudentContact/ValidateReCaptcha' , body, options)
            .map((response: Response) => <IreCaptchaResponse>response.json())
            .catch(this.handleError);
    }

    //   "https://www.google.com/recaptcha/api/siteverify?secret=<--Your Secret Key-->&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']
    //Get List of Profile Pictures to exclude from picture list
    getProfilePictures(id:number): Observable<IProfilePictures[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentprofilepictures/GetByStudentId/' + id)
                    .map((response: Response) => <IProfilePictures[]>response.json())
                    //.do(data => console.log('getProfilePictures: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Classes
    getClasses(id:number): Observable<IClass[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentclasses/GetByStudentId/' + id)
                    .map((response: Response) => <IClass[]>response.json())
                    //.do(data => console.log('getClasses: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Extra Curricular
    getExtraCurricular(id:number): Observable<IExtraCurricular[]> {

        return this._http.get(Config.WEBSERVICESURL + 'studentextracurricular/GetByStudentId/' + id)
                    .map((response: Response) => <IExtraCurricular[]>response.json())
                    //.do(data => console.log('getExtraCurricular: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    // Get Links
    getLinks(id:number): Observable<ILink[]> {

        return this._http.get(Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/' + id)
                    .map((response: Response) => <ILink[]>response.json())
                    //.do(data => console.log('getLinks: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Schedule
    getSchedule(id:number): Observable<IScheduleItem[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentschedwithactivity/GetByStudentId/' + id)
                    .map((response: Response) => <IScheduleItem[]>response.json())
                    //.do(data => console.log('getSchedule: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get student
    getStudent(id:number): Observable<IStudent> {
        return this._http.get(Config.WEBSERVICESURL + 'student/' + id)
                    .map((response: Response) => <IStudent>response.json())
                    //.do(data => console.log('getStudent: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get profile
    getProfile(id:number): Observable<IProfile> {
        return this._http.get(Config.WEBSERVICESURL + 'studentprofile/' + id)
                    .map((response: Response) => <IProfile>response.json())
                    .first()
                    //.do(data => console.log('getProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    getProfileByName(profilename:string): Observable<IProfile> {
        return this._http.get(Config.WEBSERVICESURL + 'studentprofile/' + profilename)
                    .map((response: Response) => <IProfile>response.json())
                    .first()
                    //.do(data => console.log('getProfileByName: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    poststudentContact(msg: IContactMe): Observable<any> {
        let body = JSON.stringify(msg);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(Config.WEBSERVICESURL + 'studentcontact/', body, options)
            .map(res =>  res.json().data)
            //.do(data => console.log('poststudentContact: ' + JSON.stringify(data)))
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
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(Config.WEBSERVICESURL + 'email/', body, options)
            .map(res =>  res)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}