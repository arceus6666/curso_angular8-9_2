import { Component, OnInit, OnDestroy } from '@angular/core';
import { Receta } from '../models/Receta';
import { NuevaRecetaService } from '../services/nueva-receta.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit, OnDestroy {

  lista: Receta[] = [];
  sub: Subscription;

  constructor(private recetaService: NuevaRecetaService) { }

  ngOnInit(): void {
    console.log('sub');
    this.sub = this.recetaService.getReceta().subscribe((receta: Receta) => {
      this.lista.push(receta);
    });

    this.lista = this.recetaService.ListaRecetas;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('unsub')
  }



}
