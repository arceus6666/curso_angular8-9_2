import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRecetasComponent } from './lista-recetas/lista-recetas.component';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';
import { BuscarRecetaComponent } from './buscar-receta/buscar-receta.component';

const routes: Routes = [
  { path: '', component: ListaRecetasComponent },
  { path: 'crear', component: CrearRecetaComponent },
  { path: 'buscar', component: BuscarRecetaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
