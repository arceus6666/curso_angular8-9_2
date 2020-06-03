interface IReceta {
  _titulo?: string;
  _descripcion?: string;
  _fecha?: Date;
  _cantidad?: number;
  _ingredientes?: string;
  _popularidad?: number;
  _precio?: number;
}

export class Receta {
  private _titulo: string;
  private _descripcion: string;
  private _fecha?: Date;
  private _cantidad?: number;
  private _ingredientes: any[];
  private _popularidad?: number;
  private _precio?: number;

  constructor(receta: IReceta) {
    this._titulo = receta._titulo;
    this._descripcion = receta._descripcion;
    this._fecha = receta._fecha;
    this._cantidad = receta._cantidad;
    this._popularidad = receta._popularidad;
    this._precio = receta._precio;
  }


  public get titulo(): string {
    return this._titulo;
  }

  public get descripcion(): string {
    return this._descripcion;
  }

  public get fecha() {
    return this._fecha;
  }

  public get cantidad() {
    return this._cantidad;
  }

  public get popularidad() {
    return this._popularidad;
  }

  public get precio() {
    return this._precio;
  }

}
