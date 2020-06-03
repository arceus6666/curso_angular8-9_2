import { Component, OnInit } from '@angular/core';
import { NuevaRecetaService } from '../services/nueva-receta.service';
import { Receta } from '../models/Receta.class';

@Component({
  selector: 'app-buscar-receta',
  templateUrl: './buscar-receta.component.html',
  styleUrls: ['./buscar-receta.component.css']
})
export class BuscarRecetaComponent implements OnInit {

  termino: string;
  listaRecetas: Array<Receta> = [];

  constructor(private nuevaRecetaService: NuevaRecetaService) { }

  ngOnInit(): void {
    this.listaRecetas = this.nuevaRecetaService.ListaRecetas;
  }

  cambio(event: string) {
    console.log(event);
    this.listaRecetas = this.nuevaRecetaService.ListaRecetas.filter((receta: Receta) => {
      return receta.titulo.toLowerCase().includes(event.toLowerCase());
      // return receta.titulo == this.termino;
    });
  }

}
