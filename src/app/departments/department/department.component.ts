import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bg-department',
  templateUrl: 'department.component.html',
  styleUrls: ['department.component.css']
})
export class DepartmentComponent implements OnInit {

   id :number;

  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    console.log(this.id);

  }

}
