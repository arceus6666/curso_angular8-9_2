import { Component, OnInit } from '@angular/core';
import { ListaUsuariosComponent } from '../../lista-usuarios/lista-usuarios.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-borrar-usuario-confirmacion',
  templateUrl: './borrar-usuario-confirmacion.component.html',
  styleUrls: ['./borrar-usuario-confirmacion.component.css']
})
export class BorrarUsuarioConfirmacionComponent implements OnInit {

  constructor(
    private listaUsuarios: MatBottomSheetRef<ListaUsuariosComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar() {
    this.listaUsuarios.dismiss({ resultado: true });
  }

  cancelar() {
    this.listaUsuarios.dismiss({ resultado: true });
  }

}
