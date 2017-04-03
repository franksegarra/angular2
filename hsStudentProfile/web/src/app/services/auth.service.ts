import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

//Global settings
import { Config } from '../config.service';

@Injectable()
export class AuthService {
    public token: string;
    public role: string;
    public userid: number;
    private loggedIn = false;
    private headers: Headers;
    public options: RequestOptions;

    constructor(private http: Http) {
        console.log("Auth Service Created");
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

  login(username: string, password: string): Observable<boolean> {
    let body = JSON.stringify({ username: username, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(Config.WEBSERVICESURL + 'jwt/', body, options)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().access_token;
            let userid = response.json() && response.json().userid;
            let role = response.json() && response.json().role; 
            if (token) {
                // set token property
                this.token = token;
                this.userid = userid;
                this.role = role;
                this.loggedIn = true;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, userid: userid, role: role }));
                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
  }
  
  logout() {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setAuthHeader() {
    if (this.isLoggedIn())
    {
        // add authorization header with jwt token
        this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        this.options = new RequestOptions({ headers: this.headers });
    }
    else
    {
        this.headers = null;
        this.options = null;
    }
  }

  getAuthHeader(): RequestOptions {
    this.setAuthHeader();
    return this.options;
  }

}