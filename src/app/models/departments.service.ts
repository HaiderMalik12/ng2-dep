import { Injectable } from '@angular/core';
import {Department} from "./department.model";
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DepartmentsService {

  private apiUrl : string = 'http://localhost:1337';

  constructor(private http: Http) { }


  /**
   * Get all the departments from server
   * @return {Observable<R>}
   */
  getDepartments(){

    return this.http.get(`${this.apiUrl}/departments`)
        .map(this.extractData)
        .catch(this.handleError);

  }

  /**
   * This method will accept department as a input and create into db
   * @param department
   * @return {Object} - A newly created department
   */

  createDepartment(department){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

     return this.http.post(`${this.apiUrl}/department`,department,options)
         .map(res => res.json())
         .catch(this.handleError);

  }

  /**
   * This method will delete the department in the server
   * @param departmentId
   * @return {Observable<R>}
   */

  deleteDepartment(departmentId) {

    return this.http.delete(`${this.apiUrl}/department/${departmentId}`)
        .map(res => res.json)
        .catch(this.handleError);


  }

  /**
   * This method will find all the users against each department
   * @param depId
   * @return {Observable<R>}
   */
  getUsers(depId:number){
    return this.http.get(`${this.apiUrl}/department/${depId}/users`)
        .map(res => res.json())
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
