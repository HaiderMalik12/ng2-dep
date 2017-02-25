import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import './rxjs-extension';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {DepartmentsService} from "./models/departments.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [NavComponent, routableComponents],
    bootstrap: [AppComponent],
    providers:[DepartmentsService]
})
export class AppModule {
}
