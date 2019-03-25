import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],//used to launch the browser app
  declarations: [ AppComponent ],//it tells which component belongs to which module
  bootstrap:    [ AppComponent ]//it automatically loads the contents to the browser
})
export class AppModule { }
