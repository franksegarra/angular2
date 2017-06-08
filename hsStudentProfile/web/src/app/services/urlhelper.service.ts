import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { AuthService }  from './auth.service';

@Injectable()
export class UrlHelperService {
    constructor( private http: Http, private authService: AuthService) {}

    get(url: string): Observable<any> {
        return new Observable((observer: Subscriber<any> ) => {
            
            let objectUrl: string = null;
            this.http.get(url, this.getHeaders())
                .subscribe(m => {
                    objectUrl = URL.createObjectURL(m.blob());
                    observer.next(objectUrl);
                });

            return () => {
                if (objectUrl) {
                    URL.revokeObjectURL(objectUrl);
                    objectUrl = null;
                }
            };
        });
    }

    getHeaders(): RequestOptions {
        let token = this.authService.getCurrentToken();
        var headers: Headers = new Headers({ 'Authorization': 'Bearer ' + token });
        headers.append('Cache-Control', 'no-cache');
        let options = new RequestOptions();
        options.headers = headers;
        options.responseType = ResponseContentType.Blob;
        return options;
    }
}