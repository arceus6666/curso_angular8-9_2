import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';
import { BaseComponent } from './base/base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PermisosGuard } from './permisos.guard';
import { Rol } from './models/rol';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: '', component: HomePageComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'usuarios',
        canActivate: [PermisosGuard],
        data: {
          roles: [
            Rol.Admin
          ]
        },
        loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path: '',
        component: BaseComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
