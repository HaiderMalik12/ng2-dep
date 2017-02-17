import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [Material2AppAppComponent, DialogContent, NavComponent],
  entryComponents: [DialogContent],
  bootstrap: [Material2AppAppComponent],
})
export class MaterialAppModule { }
