import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }

   departements : [{
     id:1,
     name:'Physics',
     description: 'This is my Description'
   }];

  ngOnInit() {
  }

}
