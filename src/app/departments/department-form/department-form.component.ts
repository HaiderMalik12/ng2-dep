import {Component, OnInit} from '@angular/core';
import {Department} from "../../models/department.model";
import {DepartmentsService} from '../../models/departments.service';

@Component({
    selector: 'app-department-form',
    templateUrl: './department-form.component.html',
    styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

    constructor(private  departmentService: DepartmentsService) {

    }

    ngOnInit() {
    }

    department: {name: string, block: string, location: string} = {
        name: '', block: '', location: ''
    };


    saveDepartment(department) {
        this.departmentService.createDepartment(department)
            .subscribe(() => {
                 alert('Department Created Successfully!!')
                },
                err => {
                    alert(err);
                })
    }


}
