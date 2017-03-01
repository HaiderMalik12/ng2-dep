import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from '../models/departments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private depService:DepartmentsService,
             private route: ActivatedRoute) { }


  users : any = [];

  ngOnInit() {
        this.depService.getUsers(this.route.snapshot.params['id'])
            .subscribe(
                dep => this.users = dep.users, //Bind to view
                err => {
                  // Log errors if any
                  console.log(err);
                });
  }



}
