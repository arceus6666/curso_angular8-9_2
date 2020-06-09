import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: '', component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
