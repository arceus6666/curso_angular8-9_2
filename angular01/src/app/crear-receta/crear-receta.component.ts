import { Component, OnInit } from '@angular/core';
import { NuevaRecetaService } from '../services/nueva-receta.service';
import { Receta } from '../models/Receta.class';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css']
})
export class CrearRecetaComponent implements OnInit {

  titulo: string;
  descripcion: string;
  cantidad: number;
  fecha: Date;
  popularidad: number;
  precio:number;

  constructor(private recetaService: NuevaRecetaService) { }

  ngOnInit(): void {
  }

  guardar(): void {
    this.recetaService.setReceta(new Receta({
      _titulo: this.titulo,
      _descripcion: this.descripcion,
      _cantidad: this.cantidad,
      _fecha: this.fecha,
      _popularidad: this.popularidad,
      _precio: this.precio
    }));
    Swal.fire({ title: 'Guardado' });
  }

}
