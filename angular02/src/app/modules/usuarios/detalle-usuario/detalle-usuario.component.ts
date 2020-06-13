import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../autenticacion/models/usuario.interface';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  id: string = null;
  usuario: Usuario = {};

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.api.getDetalleUsuario(this.id).subscribe(result => {
        this.usuario = result;
      }, err => {
        // console.log(err);
        if (err.status == 404) {
          this.router.navigate(['/404']);
        }
      });
    });
  }

}
