import { Component, OnInit } from '@angular/core';
import { NuevaRecetaService } from '../services/nueva-receta.service';
import { Receta } from '../models/Receta';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css']
})
export class CrearRecetaComponent implements OnInit {

  titulo: string;
  descripcion: string;

  constructor(private recetaService: NuevaRecetaService) { }

  ngOnInit(): void {
  }

  guardar(): void {
    this.recetaService.setReceta(new Receta(this.titulo, this.descripcion));
  }

}
