interface IReceta {
  _titulo?: string;
  _descripcion?: string;
  _ingredientes?: string;
}

export class Receta {
  private _titulo: string;
  private _descripcion: string;
  private _ingredientes: any[];

  constructor(receta: IReceta) {
    this._titulo = receta._titulo;
    this._descripcion = receta._descripcion;
  }


  public get titulo(): string {
    return this._titulo;
  }

  public get descripcion(): string {
    return this._descripcion;
  }

}
