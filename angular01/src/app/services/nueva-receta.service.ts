import { Injectable } from '@angular/core';
import { Receta } from '../models/Receta';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuevaRecetaService {

  private _receta: Subject<Receta> = new Subject<Receta>();

  constructor() { }

  getReceta(): Observable<Receta> {
    return this._receta.asObservable();
  }

  setReceta(receta: Receta) {
    this._receta.next(receta);
  }
}
