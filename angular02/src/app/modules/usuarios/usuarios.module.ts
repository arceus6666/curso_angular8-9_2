import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { JwtInterceptor } from 'src/app/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { BorrarUsuarioConfirmacionComponent } from './extras/borrar-usuario-confirmacion/borrar-usuario-confirmacion.component';
import { EditarusuarioComponent } from './editar-usuario/editar-usuario.component';



@NgModule({
  declarations: [ListaUsuariosComponent, DetalleUsuarioComponent, CrearUsuarioComponent, BorrarUsuarioConfirmacionComponent, EditarusuarioComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatBottomSheetModule,
    MatInputModule,
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
