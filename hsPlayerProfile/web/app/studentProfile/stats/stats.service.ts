import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IHittingStats } from '../../models/IHittingStats';
import { IBBProfile } from '../../models/IBBProfile';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class StatsService {
    private _bbprofilesUrl: string  = Config.WEBSERVICESURL + 'studentbaseballprofile/GetByStudentId/';
    private _hittingstatUrl: string  = Config.WEBSERVICESURL + 'StudentBBHittingStats/GetByStudentId/';

    public hittinglist:Array<IHittingStats> = [];
    public categories:Array<string> = [];

    constructor(private _http:Http) {}

    //Get Baseball profile
    getBBProfile(id:number): Observable<IBBProfile[]> {
        return this._http.get(this._bbprofilesUrl + id)
                    .map((response: Response) => <IBBProfile[]>response.json())
                    .first()
                    .do(data => console.log('getBBProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    //Get getHittingStats
    getHittingStats(id:number): Observable<IHittingStats[]> {
        return this._http.get(this._hittingstatUrl + id)
            .map((response: Response) => <IHittingStats[]>response.json())
            .do(data => console.log('getHittingStats: ' + JSON.stringify(data)))
            .catch(this.handleError) ;
    }

    getHittingList(id:number) {
        this._http.get(this._hittingstatUrl + id)
        .map((res:Response) => <IHittingStats[]>res.json())
        .do(data => console.log('getHittingList: ' + JSON.stringify(data)))
        .subscribe(
            data => {
                this.hittinglist = data;
                this.categories = this.hittinglist.map(function(e) { return e['category']; }).filter(function(e,i,a){
                    return i === a.indexOf(e);
                });            
                console.log(this.categories);
            }
        );
    };

    private handleError(error: Response) {
    console.error(error);
    console.error('error in service');
    return Observable.throw(error.json().error || 'Server error');
    }
}
