import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receta } from '../models/Receta';

@Component({
  selector: 'app-crear-receta-child',
  templateUrl: './crear-receta-child.component.html',
  styleUrls: ['./crear-receta-child.component.css']
})
export class CrearRecetaChildComponent implements OnInit {

  titulo: string;
  descripcion: string;

  @Output() receta = new EventEmitter<Receta>();

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.receta.emit(new Receta({_titulo: this.titulo, _descripcion: this.descripcion}));
  }

}
