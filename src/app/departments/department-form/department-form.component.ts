import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Department} from "../../models/department.model";
import {DepartmentsService} from '../../models/departments.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-department-form',
    templateUrl: './department-form.component.html',
    styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

    constructor(private  departmentService: DepartmentsService,
               public toastr : ToastsManager,
                vcr: ViewContainerRef) {
       this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
    }

    department= new Department(null,'','','',null,'');

    saveDepartment(department) {
        this.departmentService.createDepartment(department)
            .subscribe(() => {
                  this.toastr.success('New department has been created successfully!','Success!');
                },
                err => {
                    this.toastr.error('Error while creating department', 'Oops!');
                })
    }


}
