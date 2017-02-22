import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule, routableComponents} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [NavComponent, routableComponents],
    bootstrap: [AppComponent],
})
export class AppModule {
}
