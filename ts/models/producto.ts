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


    public set precio(v: number) {
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

// console.log(producto)

const listaResponse: Array<IProducto> = [
    {
        nombre: 'a',
        precio: 1
    },
    {
        nombre: 'b',
        precio: 2
    },
]

let listaProductos: Array<Producto> = []

for (let item of listaResponse){
    listaProductos.push(new Producto(item));
}

listaProductos.map((e)=>{
    e.precio += e.precio * 0.13
})

console.log(listaProductos)

