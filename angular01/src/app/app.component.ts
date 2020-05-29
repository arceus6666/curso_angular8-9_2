import { Component, OnInit } from '@angular/core';
import { Receta } from './models/Receta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaRecetasPadre: Array<Receta> = [];

  ngOnInit(): void {
  }
  // title = 'angular01';

  agregarReceta(receta: Receta) {
    this.listaRecetasPadre.push(receta);
  }

}
