import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Deal } from './deal';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private publicDealsUrl = 'http://localhost:3001/api/deals/public';
  private privateDealsUrl = 'http://localhost:3001/api/deals/private';

  constructor(private http: Http, private authHttp: AuthHttp) { }

  // Implement a method to get the public deals
  getPublicDeals(): Observable<Deal[]>  {
    return this.http.get(this.publicDealsUrl)
            .map((response: Response) => <Deal[]>response.json())
            //.do(data => console.log('getPublicDeals: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  // Implement a method to get the private deals
  getPrivateDeals() {
    return this.authHttp.get(this.privateDealsUrl)
            .map((response: Response) => <Deal[]>response.json())
            //.do(data => console.log('getPublicDeals: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  // Implement a method to handle errors if any
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}