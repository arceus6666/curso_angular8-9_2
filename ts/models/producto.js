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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "precion", {
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
console.log(producto);
