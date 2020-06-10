import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { JwtInterceptor } from 'src/app/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [ListaUsuariosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    UsuariosRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class UsuariosModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsuariosModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        }
      ]
    };
  }
}
