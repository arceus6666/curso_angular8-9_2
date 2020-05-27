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
    this.listaRecetasPadre.push(new Receta('Pan', '1'));
    this.listaRecetasPadre.push(new Receta('Leche', '1'));
    this.listaRecetasPadre.push(new Receta('Naranja', '1'));
  }
  // title = 'angular01';

  agregarReceta(receta: Receta) {
    this.listaRecetasPadre.push(receta);
  }

}
