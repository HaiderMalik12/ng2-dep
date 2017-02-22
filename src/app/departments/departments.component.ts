import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }

   departements : [{
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

  ngOnInit() {
  }

}
