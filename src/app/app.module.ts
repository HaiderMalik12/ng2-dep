import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { NavComponent } from './nav/nav.component';
import { DepartmentComponent } from './department/department.component';
import {AppRoutingModule} from "./app-routing.module";
import { DepartmentsComponent } from './departments/departments.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
      AppRoutingModule
  ],
  declarations: [AppComponent, NavComponent, DepartmentComponent, DepartmentsComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
