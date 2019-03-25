import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule,HttpModule],//browsermodule used to launch the browser app and httpmodule is used to communicate or get the data from the backend servicea
  declarations: [AppComponent],//it tells which component belongs to which module
  bootstrap: [AppComponent]//it automatically loads the contents to the browser
})
export class AppModule { }
