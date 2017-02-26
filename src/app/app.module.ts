import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import './rxjs-extension';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {DepartmentsService} from "./models/departments.service";
import { DepartmentFormComponent } from './departments/department-form/department-form.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [NavComponent, routableComponents, DepartmentFormComponent],
    bootstrap: [AppComponent],
    providers:[DepartmentsService]
})
export class AppModule {
}
