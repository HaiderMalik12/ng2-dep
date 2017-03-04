import {Component, OnInit,ViewContainerRef} from '@angular/core';
import {DepartmentsService} from "../models/departments.service";
import {Department} from "../models/department.model";
import {Observable} from "rxjs";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'bg-departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

    constructor(private departmentService: DepartmentsService,
                public toastr : ToastsManager,
                vcr: ViewContainerRef) {

        this.toastr.setRootViewContainerRef(vcr);

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
                    this.toastr.success('Department has been deleted!','Success!');

                    },
                    err => {
                        console.error(err);
                        this.toastr.error('Error while deleting department', 'Oops!');
                    });




    }

}
