import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Usuario } from '../../autenticacion/models/usuario.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BorrarUsuarioConfirmacionComponent } from '../extras/borrar-usuario-confirmacion/borrar-usuario-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  dataSource = new MatTableDataSource<Usuario>();
  // usuarios: Usuario[] = [];
  columnas: string[] = ['nombre', 'email', 'rol', 'creado', 'actions'];
  id: string;

  constructor(
    private api: ApiService,
    private bottomSheet: MatBottomSheet,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.api.getListaUsuarios().subscribe(res => {
      this.dataSource.data = res;
      // console.log(res);
      // this.usuarios = res;
    });
  }

  accionBorrar(id: string): void {
    const resultado = this.bottomSheet.open(BorrarUsuarioConfirmacionComponent);
    resultado.afterDismissed().subscribe(res => {
      if (res.resultado) {
        this.api.borrarUsuario(id).subscribe(res2 => {
          this.snack.open('Usuario borrado!', null, { duration: 2500 });
          // const index = this.dataSource.data.findIndex(value => value._id === id);
          // if (index !== -1) {
          this.dataSource.data = this.dataSource.data.filter(e => e._id !== id);
          // this.usuarios.splice(index, 1);

          // }
          // console.log(res2);
        }, err => console.log(err));
      } else {
        console.log('cancelado');
      }
    });
  }

  borrar() {
    console.log(this.id);
  }

}
