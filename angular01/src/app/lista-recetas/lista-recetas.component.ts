import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/Receta';
import { NuevaRecetaService } from '../services/nueva-receta.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {

  lista: Receta[] = [];
  sub: Subscription;

  constructor(private recetaService: NuevaRecetaService) { }

  ngOnInit(): void {
    this.sub = this.recetaService.getReceta().subscribe((receta: Receta) => {
      this.lista.push(receta);
    });
  }

}
