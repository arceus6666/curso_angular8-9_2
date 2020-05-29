import { Injectable } from '@angular/core';
import { Receta } from '../models/Receta';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevaRecetaService {

  private lista: Array<Receta> = [];

  private _receta: Subject<Receta> = new Subject<Receta>();

  constructor() {
    const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
    console.log(recetas);
    for(const receta of recetas){
      this.lista.push(new Receta(receta));
    }
  }

  get ListaRecetas() {
    return this.lista;
  }

  getReceta(): Observable<Receta> {
    return this._receta.asObservable();
  }

  setReceta(receta: Receta) {
    this.lista.push(receta);
    localStorage.setItem('recetas', JSON.stringify(this.lista));
    this._receta.next(receta);
  }
}
