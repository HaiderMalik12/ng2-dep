import { Injectable } from '@angular/core';
import {Department} from "./department.model";

@Injectable()
export class DepartmentsService {

  constructor() { }

  getDepartments(){

    let departments: Department[] = [{
      id:1,
      name:'Physics',
      description: 'This is my Description'
    },{
      id:2,
      name:'Node',
      description: 'This is my Description'
    },{
      id:3,
      name:'BlueBird',
      description: 'This is my Description'
    },{
      id:4,
      name:'Async',
      description: 'This is my Description'
    },{
      id:5,
      name:'Math',
      description: 'This is my Description'
    }];

    return departments;
  }
}
