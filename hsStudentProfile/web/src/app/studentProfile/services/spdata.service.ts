import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

//Authorization service
import { AuthService } from '../../services/auth.service';

//Global settings
import { Config } from '../../config.service';

//Our Objects
import { ILink } from '../../models/ILink';

@Injectable()
export class spDataService {

    constructor(private _http: Http, private _authService: AuthService) {}

    //Links
    getLinks(id:number): Observable<ILink[]> {
        return this._http.get(Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/' + id, this._authService.getAuthHeader())
                    .map((response: Response) => <ILink[]>response.json())
                    .catch(this.handleError) ;
    }

    postStudentLink(link: ILink): Observable<any> {
        let body = JSON.stringify(link);
        console.log("postStudentLink In Edit Service" + JSON.stringify(link));
        return this._http.post(Config.WEBSERVICESURL + 'studentlinks/', body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    putStudentLink(link: ILink): Observable<any> {
        let body = JSON.stringify(link);
        return this._http.put(Config.WEBSERVICESURL + 'studentlinks/' + link.id.toString(), body, this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
    }

    deleteStudentLink(id:number): Observable<any> {
        return this._http.delete(Config.WEBSERVICESURL + 'studentlinks/' + id.toString(), this._authService.getAuthHeader())
            .map(res =>  res)
            .catch(this.handleError);
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