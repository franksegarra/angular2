import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IHittingStats } from '../../models/IHittingStats';
import { HittingCategory } from '../../models/HittingCategory';
import { IBBProfile } from '../../models/IBBProfile';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/throw';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class StatsService {
    public bbprofile: IBBProfile;
    public hittinglist:Array<IHittingStats> = [];
    public categories:Array<string> = [];
    public hittingcategories: Array<HittingCategory> = []; 

    constructor(private _http:Http) {}

    //Get Baseball profile
    getBBProfile(id:number): Observable<IBBProfile[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentbaseballprofile/GetByStudentId/' + id)
                    .map((response: Response) => <IBBProfile[]>response.json())
                    //.first()
                    .do(data => console.log('getBBProfile: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    getHittingList(id:number) {
        this.hittinglist.length = 0;
        this.categories.length = 0;
        this.hittingcategories.length = 0;

        this._http.get( Config.WEBSERVICESURL + 'StudentBBHittingStats/GetByStudentId/' + id)
        .map((res:Response) => <IHittingStats[]>res.json())
        //.do(data => console.log('getHittingList: ' + JSON.stringify(data)))
        .subscribe(
            data => {
                this.hittinglist = data;
                this.createStatsCategories();
            }
        );
    };

    createStatsCategories() {

        //Create local variable
        var list:Array<IHittingStats> = this.hittinglist;
        var hctemp = this.hittingcategories;

        //Get list of categories
        this.categories = this.hittinglist.map(function(e) { return e['category']; }).filter(function(e,i,a){return i === a.indexOf(e);});            

        //For each category create the object and fill the array
        this.categories.forEach(function(item) {
            var hc: HittingCategory = new HittingCategory();
            hc.category = item;
            hc.categorylist = list.filter(function(e){return e.category == item;});
            hc.createStatsCategoryTotal();

            //Add to array
            hctemp.push(hc);
        });
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}
