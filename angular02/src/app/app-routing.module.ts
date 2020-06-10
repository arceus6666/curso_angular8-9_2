import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth.guard';


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
        loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule), pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
