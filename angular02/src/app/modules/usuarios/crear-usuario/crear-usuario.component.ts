import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.interface';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Rol } from '../models/roles.interface';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  roles: Rol[];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private snack: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rol: new FormControl('', [Validators.required]),
    });

    this.roles = [
      { title: 'Administrador', value: 'ADMIN_ROLE' },
      { title: 'Usuario', value: 'USER_ROLE' }
    ];
  }

  get f() {
    return this.usuarioForm.controls;
  }

  crear() {
    if (!this.usuarioForm.invalid) {
      const params = this.usuarioForm.getRawValue() as Usuario;
      this.api.crearUsuario(params).subscribe(res => {
        this.snack.open('Usuario creado!', null, { duration: 2000 });
        // console.log(res);
        this.router.navigate(['../'], { relativeTo: this.route });
      }, (err: HttpErrorResponse) => {
        this.snack.open(err.error.mensaje.message, null, { duration: 2000 });
        // console.log(err);
      });
    }
  }

}
