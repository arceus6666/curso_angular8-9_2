class Producto {

    private _nombre: string;
    private _precio: number;

    constructor(producto: IProducto) {
        this._nombre = producto.nombre
        this._precio = producto.precio || 0
    }


    public get nombre(): string {
        return this._nombre;
    }


    public set nombre(v: string) {
        this._nombre = v;
    }


    public get precio(): number {
        return this._precio
    }


    public set precion(v: number) {
        this._precio = v;
    }

}

interface IProducto {
    nombre: string;
    precio?: number;
}

const leche: IProducto = {
    nombre: 'pil',
    precio: 9,
}

let producto = new Producto(leche);

console.log(producto)