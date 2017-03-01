import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {DepartmentsComponent} from './departments/departments.component';
import {DepartmentComponent} from './departments/department/department.component';
import {DepartmentFormComponent} from './departments/department-form/department-form.component';
import {UsersComponent} from './users/users.component'

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'departments'},
    {path: 'departments', component: DepartmentsComponent},
    {path: 'departments/:id', component: DepartmentComponent},
    {path: 'department/add', component: DepartmentFormComponent},
    {path: 'departments/:id/users', component: UsersComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routableComponents = [
    AppComponent,
    DepartmentsComponent,
    DepartmentComponent,
    DepartmentFormComponent,
    DepartmentFormComponent,
    UsersComponent
];