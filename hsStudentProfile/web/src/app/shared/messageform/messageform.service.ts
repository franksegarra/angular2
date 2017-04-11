import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//Global settings
import { Config } from '../../config.service';

//Our Objects
import { IreCaptchaResponse } from '../../models/IreCaptchaResponse';

//Auth service
import { AuthService }  from '../../services/auth.service';

//Remove this
interface IreCaptcha { response: string };

@Injectable()
export class MessageFormService {
    constructor(private http: Http, private authService: AuthService) {}

    verifyRecaptchaResponse(event: any): Observable<any> {
        var recaptcharesponse: IreCaptcha = event; 
        let body = JSON.stringify(recaptcharesponse.response);
        return this.http.post(Config.WEBSERVICESURL + 'StudentContact/ValidateReCaptcha' , body, this.authService.getAuthHeader())
            .map((response: Response) => <IreCaptchaResponse>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        console.error('error in service');
        return Observable.throw(error.json().error || 'Server error');
    }
}
