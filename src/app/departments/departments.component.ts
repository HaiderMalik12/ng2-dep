import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from "./departments.service";

@Component({
  selector: 'bg-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private departmentService : DepartmentsService) { }

   departments = [];


  ngOnInit() {
      this.departments = this.departmentService.getDepartments();
  }

}
