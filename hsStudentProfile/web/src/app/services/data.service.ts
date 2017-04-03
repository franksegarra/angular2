import { Injectable } from '@angular/core';
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
import { IClass } from '../models/IClass';
import { IExtraCurricular } from '../models/IExtraCurricular';
import { ILink } from '../models/ILink';
import { IScheduleItem } from '../models/IScheduleItem';
import { IProfile } from '../models/IProfile';
import { IStudent } from '../models/IStudent';
import { IContactMe } from '../models/IContactMe';
import { IEmail } from '../models/IEmail';
import { IProfilePictures } from '../models/IProfilePictures';
import { IFeedback } from '../models/IFeedback';
import { IPicture } from '../studentprofile/pictures/IPicture';
import { IVideo } from '../studentprofile/videos/IVideo';
import { ICoach } from '../models/ICoach';
import { IBBProfile } from '../models/IBBProfile';
import { IHittingStats } from '../models/IHittingStats';
import { HittingCategory } from '../models/HittingCategory';

//Auth service
import { AuthService }  from './auth.service';

interface IIPAddress { ip: string };

@Injectable()
export class DataService {

    private ipaddress: IIPAddress;
    private errorMessage: string;
    private options: RequestOptions;

    constructor(private _http: Http, private authService: AuthService) {        
        this.getClientIPAddress().subscribe(p => this.ipaddress = p, error => this.errorMessage = <any>error);
    }

    getProfile(id:number): Observable<IProfile> {
        this.options = this.authService.getAuthHeader();
        return this._http.get(Config.WEBSERVICESURL + 'studentprofile/' + id, this.options)
                    .map((response: Response) => <IProfile>response.json())
                    //.do(data => console.log('getProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    getProfileByName(profilename:string): Observable<IProfile> {
        return this._http.get(Config.WEBSERVICESURL + 'studentprofile/' + profilename, this.options)
                    .map((response: Response) => <IProfile>response.json())
                    //.do(data => console.log('getProfileByName: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    getClasses(id:number): Observable<IClass[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentclasses/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IClass[]>response.json())
                    //.do(data => console.log('getClasses: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    getExtraCurricular(id:number): Observable<IExtraCurricular[]> {

        return this._http.get(Config.WEBSERVICESURL + 'studentextracurricular/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IExtraCurricular[]>response.json())
                    //.do(data => console.log('getExtraCurricular: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    getVideos(id:number): Observable<IVideo[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentvideos/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IVideo[]>response.json())
                    .catch(this.handleError) ;
    }

    getPictures(id:number): Observable<IPicture[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentpictures/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IPicture[]>response.json())
                    .catch(this.handleError) ;
    }

    getSchedule(id:number): Observable<IScheduleItem[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentschedwithactivity/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IScheduleItem[]>response.json())
                    //.do(data => console.log('getSchedule: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    getLinks(id:number): Observable<ILink[]> {

        return this._http.get(Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <ILink[]>response.json())
                    //.do(data => console.log('getLinks: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    getBBProfile(id:number): Observable<IBBProfile[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentbaseballprofile/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IBBProfile[]>response.json())
                    //.do(data => console.log('getBBProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    getCoaches(id:number): Observable<ICoach[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentcoaches/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <ICoach[]>response.json())
                    //.do(data => console.log('getCoaches: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    getHittingStats(id:number): Observable<IHittingStats[]> {
        return this._http.get( Config.WEBSERVICESURL + 'StudentBBHittingStats/GetByStudentId/' + id, this.options)
                    .map((res:Response) => <IHittingStats[]>res.json())
                    //.do(data => console.log('getHittingList: ' + JSON.stringify(data)))
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

    getProfilePictures(id:number): Observable<IProfilePictures[]> {
        //Get List of Profile Pictures.  Used to exclude these from the picture list
        return this._http.get(Config.WEBSERVICESURL + 'studentprofilepictures/GetByStudentId/' + id, this.options)
                    .map((response: Response) => <IProfilePictures[]>response.json())
                    //.do(data => console.log('getProfilePictures: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    getStudent(id:number): Observable<IStudent> {
        return this._http.get(Config.WEBSERVICESURL + 'student/' + id, this.options)
                    .map((response: Response) => <IStudent>response.json())
                    //.do(data => console.log('getStudent: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    poststudentContact(msg: IContactMe): Observable<any> {
        msg.ipaddress = this.ipaddress.ip;
        let body = JSON.stringify(msg);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(Config.WEBSERVICESURL + 'studentcontact/', body, options)
            .map(res =>  res.json().data)
            //.do(data => console.log('poststudentContact: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    postSiteFeedback(msg: IFeedback): Observable<any> {
        console.log('postSiteFeedbackmsg');

        msg.ipaddress = this.ipaddress.ip;
        console.log(msg);

        let body = JSON.stringify(msg);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(Config.WEBSERVICESURL + 'sitefeedback/', body, options)
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

    getClientIPAddress(): Observable<IIPAddress> {
        return this._http.get('https://api.ipify.org?format=json')
            .map((response: Response) => <IIPAddress>response.json())
            //.do(data => console.log('getClientIPAddress: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}