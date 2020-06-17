import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Usuario } from '../../autenticacion/models/usuario.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BorrarUsuarioConfirmacionComponent } from '../extras/borrar-usuario-confirmacion/borrar-usuario-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  id: string;

  dataSource = new MatTableDataSource<Usuario>();
  columnas: string[] = ['select', 'nombre', 'email', 'rol', 'creado', 'actions'];

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Usuario>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private api: ApiService,
    private bottomSheet: MatBottomSheet,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.selection = new SelectionModel<Usuario>(this.allowMultiSelect, this.initialSelection);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(event);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
