import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {DepartmentsComponent} from './departments/departments.component';
import {DepartmentComponent} from './department/department.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {path: 'departments', component: DepartmentsComponent},
    {path: 'departments/:id', component: DepartmentComponent},
    {path: '', pathMatch: 'full', redirectTo: 'department'},
    {path: 'dashboard', component: DashboardComponent},
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
    DashboardComponent,
    DepartmentComponent
]