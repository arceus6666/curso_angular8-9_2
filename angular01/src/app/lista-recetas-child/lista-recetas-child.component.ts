import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../models/Receta.class';

@Component({
  selector: 'app-lista-recetas-child',
  templateUrl: './lista-recetas-child.component.html',
  styleUrls: ['./lista-recetas-child.component.css']
})
export class ListaRecetasChildComponent implements OnInit {

  @Input() lista: Receta[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
