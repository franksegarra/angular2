import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

//Global settings
import { Config } from '../config.service';

@Injectable()
export class AuthService {
    private loggedIn = false;
    private headers: Headers;

    public token: string;
    public role: string;
    public userid: number;
    public options: RequestOptions;
    public curUserLink: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    //Calls to the server and creates observable for response
    login(profilename: string, password: string): Observable<boolean> {
        let body = JSON.stringify({ profilename: profilename, password: password });
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
                    
                    //If student, set path to their profile
                    if (role=='student')
                    {
                        this.curUserLink = 'studentprofile/' + userid;
                        this.loggedIn = true;
                    }
                    else
                    {
                        this.loggedIn = false;
                        this.curUserLink = '';
                    }

                    // store profilename and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ profilename: profilename, token: token, userid: userid, role: role }));
                    
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
    //If we are logged in or we are guest
    if (this.isLoggedIn() || this.userid == 0)
    {
        // add authorization header with jwt token
        this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        this.headers.append('Content-Type', 'application/json');
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

    getProfileName(): string {
        if (this.isLoggedIn()) 
            return JSON.parse(localStorage.getItem('currentUser')).profilename;
        else
            return null;
    }

    getCurrentToken(): string {
        return this.token;
    }

}