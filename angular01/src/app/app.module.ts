import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';
import { CrearRecetaChildComponent } from './crear-receta-child/crear-receta-child.component';
import { ListaRecetasChildComponent } from './lista-recetas-child/lista-recetas-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuscarRecetaComponent } from './buscar-receta/buscar-receta.component';
import { AppRoutingModule } from './app-routing.module';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TruncarPipe } from './pipes/truncar.pipe';
import { DolaresPipe } from './pipes/dolares.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaRecetasComponent,
    CrearRecetaComponent,
    CrearRecetaChildComponent,
    ListaRecetasChildComponent,
    NavbarComponent,
    BuscarRecetaComponent,
    TruncarPipe,
    DolaresPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
