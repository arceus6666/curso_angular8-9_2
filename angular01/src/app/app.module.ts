import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';
import { CrearRecetaChildComponent } from './crear-receta-child/crear-receta-child.component';
import { ListaRecetasChildComponent } from './lista-recetas-child/lista-recetas-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRecetasComponent,
    CrearRecetaComponent,
    CrearRecetaChildComponent,
    ListaRecetasChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
