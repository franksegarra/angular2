import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//Global settings
import { Config } from '../config.service';

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    create(user: User): Observable<any> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        // console.log(body);

        return this._http.post(Config.WEBSERVICESURL + 'users/', body, options)
            .map(res =>  res)
            .catch(this.handleError);
    }

    getAll() {
        return this._http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this._http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this._http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this._http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private handleError(error: Response) {
        console.error('error in user.service.ts');
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}