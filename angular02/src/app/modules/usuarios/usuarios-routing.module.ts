import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NgModule } from '@angular/core';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarusuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: 'nuevo', component: CrearUsuarioComponent },
  { path: ':id', component: DetalleUsuarioComponent },
  { path: ':id/editar', component: EditarusuarioComponent },
  { path: '', component: ListaUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
