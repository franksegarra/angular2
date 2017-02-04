import { Injectable } from '@angular/core';
import { IClass } from '../academics/class';
import { ILink } from '../links/link';
import { IScheduleItem } from '../schedule/scheduleItem';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private _linksUrl = 'api/links/links.json';
    private _schedUrl = 'api/schedule/schedule.json';
    private _classesUrl = 'api/classes/classes.json';

    constructor(private _http: Http) {
    }

    //Get Classes
    getClasses(): Observable<IClass[]> {

        return this._http.get(this._classesUrl)
                    .map((response: Response) => <IClass[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    // Get Links
    getLinks(): Observable<ILink[]> {

        return this._http.get(this._linksUrl)
                    .map((response: Response) => <ILink[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    //Get Schedule
    getSchedule(): Observable<IScheduleItem[]> {

        return this._http.get(this._schedUrl)
                    .map((response: Response) => <IScheduleItem[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}