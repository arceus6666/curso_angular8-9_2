"use strict";
var Producto = /** @class */ (function () {
    function Producto(producto) {
        this._nombre = producto.nombre;
        this._precio = producto.precio || 0;
    }
    Object.defineProperty(Producto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (v) {
            this._nombre = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (v) {
            this._precio = v;
        },
        enumerable: true,
        configurable: true
    });
    return Producto;
}());
var leche = {
    nombre: 'pil',
    precio: 9,
};
var producto = new Producto(leche);
// console.log(producto)
var listaResponse = [
    {
        nombre: 'a',
        precio: 1
    },
    {
        nombre: 'b',
        precio: 2
    },
];
var listaProductos = [];
for (var _i = 0, listaResponse_1 = listaResponse; _i < listaResponse_1.length; _i++) {
    var item = listaResponse_1[_i];
    listaProductos.push(new Producto(item));
}
listaProductos.map(function (e) {
    e.precio += e.precio * 0.13;
});
console.log(listaProductos);
