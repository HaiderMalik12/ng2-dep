import {Component, OnInit} from '@angular/core';
import {DepartmentsService} from "../models/departments.service";
import {Department} from "../models/department.model";
import {Observable} from "rxjs";

@Component({
    selector: 'bg-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

    constructor(private departmentService: DepartmentsService) {
    }

    departments: Observable<Department[]>;
    errorMessage: any;

    getDepartments(){
        this.departments=this.departmentService.getDepartments();
    }

    ngOnInit() {
       this.getDepartments();
    }

    deleteDepartment(department) {

        let response=
            this.departmentService.deleteDepartment(department.id)
                .subscribe(() =>{

                    this.getDepartments();
                    alert(`Department with ${department.name} Deleted`);

                    },
                    err => {
                        alert("Could not delete the user.");
                    });




    }

}
