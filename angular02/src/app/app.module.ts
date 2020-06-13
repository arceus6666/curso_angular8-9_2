import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { BaseComponent } from './base/base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAutorizadoInterceptor } from './no-autorizado.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BaseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NoAutorizadoInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
