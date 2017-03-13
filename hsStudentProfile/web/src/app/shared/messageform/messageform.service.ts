import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

//Global settings
import { Config } from '../../config.service';

//Our Objects
import { IreCaptchaResponse } from '../../models/IreCaptchaResponse';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//Remove this
interface IreCaptcha { response: string };

@Injectable()
export class MessageFormService {

private http: Http;

    constructor(private _http: Http) {        
        this.http = _http;
    }

    verifyRecaptchaResponse(event: any): Observable<any> {
        var recaptcharesponse: IreCaptcha = event; 
        let body = JSON.stringify(recaptcharesponse.response);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(Config.WEBSERVICESURL + 'StudentContact/ValidateReCaptcha' , body, options)
            .map((response: Response) => <IreCaptchaResponse>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}
