import { Injectable } from '@angular/core';
import {Department} from "./department.model";
import {Http,Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentsService {

  private apiUrl : string = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments';

  constructor(private http: Http) { }

  getDepartments(){


    return this.http.get(this.apiUrl)
        .map(this.extractData)
        .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = <Department[]>res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
