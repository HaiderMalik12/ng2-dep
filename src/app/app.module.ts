import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import './rxjs-extension';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule, routableComponents} from "./app-routing.module";
import {DepartmentsService} from "./models/departments.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ToastModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [NavComponent, routableComponents],
    bootstrap: [AppComponent],
    providers: [DepartmentsService]
})
export class AppModule {
}
