import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/models/usuario.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rol } from '../models/roles.interface';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarusuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  roles: Rol[];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      _id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rol: new FormControl('', [Validators.required]),
    });
    this.roles = [
      { title: 'Administrador', value: 'ADMIN_ROLE' },
      { title: 'Usuario', value: 'USER_ROLE' }
    ];
    this.cargarDatos();
  }

  get f() {
    return this.usuarioForm.controls;
  }

  cargarDatos() {
    this.route.params.subscribe(params => {
      this.api.getDetalleUsuario(params.id).subscribe(res => {
        this.f._id.setValue(res._id);
        this.f.nombre.setValue(res.nombre);
        this.f.email.setValue(res.email);
        this.f.rol.setValue(res.rol);

      }, err => {
        console.log(err);
      });
    });
  }

  actualizar() {
    this.api.actualizarUsuario(this.usuarioForm.getRawValue() as Usuario).subscribe(res => {
      this.snack.open('usuario actualizado!', null, { duration: 2500 });
    });

  }

}
