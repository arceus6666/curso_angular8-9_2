export class Receta {
  private _titulo: string;
  private _descripcion: string;
  ingredientes: any[];

  constructor(t, d) {
    this._titulo = t;
    this._descripcion = d;
  }


  public get titulo(): string {
    return this._titulo;
  }

  public get descripcion(): string {
    return this._descripcion;
  }

}
