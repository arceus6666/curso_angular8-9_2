import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundoAngularComponent } from './hola-mundo-angular/hola-mundo-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HolaMundoAngularComponent]
})
export class AppModule { }
