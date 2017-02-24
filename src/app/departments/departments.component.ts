import {Component, OnInit} from '@angular/core';
import {DepartmentsService} from "../models/departments.service";
import {Department} from "../models/department.model";

@Component({
    selector: 'bg-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

    constructor(private departmentService: DepartmentsService) {
    }

    departments: Department[] = [];
    errorMessage: any;


    ngOnInit() {
        this.departmentService.getDepartments()
            .subscribe(
                departments => this.departments = departments,
                error => this.errorMessage = <any>error);
    }

}
