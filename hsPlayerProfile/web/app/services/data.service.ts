import { Injectable } from '@angular/core';
import { ILink } from '../links/link';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private _linktUrl = 'api/links/links.json';

    constructor(private _http: Http) {
    }

    getLinks(): Observable<ILink[]> {

        return this._http.get(this._linktUrl)
                    .map((response: Response) => <ILink[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError) ;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}