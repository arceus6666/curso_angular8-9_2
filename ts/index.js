var mensaje = "Hola Typescript";
// console.log(mensaje);
var nombre = 'Daniel';
var apellido;
apellido = 'Mendoza';
// console.log(nombre);
// console.log(apellido);
var edad = 34.123456789;
var redondeado = parseFloat(edad.toFixed(2));
// console.log(redondeado);
var esBoliviano = false;
// console.log(!esBoliviano)
var telefonos = [];
telefonos.push(123456);
telefonos.push(987654);
// console.log(telefonos)
var opciones;
opciones = 1;
opciones = false;
opciones = 'hola ts';
opciones = {
    brillo: 70,
    contraste: 80
};
// console.log(opciones)
var listaOpciones = [];
listaOpciones.push({ brillo: 90, contraste: 70 });
listaOpciones.push({ brillo: 9, contraste: 7 });
listaOpciones.push(10);
listaOpciones.push(true);
listaOpciones.push(null);
// console.log(listaOpciones)
// if(esBoliviano){
//     console.log('Si es boliviano')
// }else
//     console.log('No es boliviano')
// for(let opcion of listaOpciones){
//     console.log(opcion)
// }
// for(let e in listaOpciones){
//     console.log(e)
// }
var configuraciones = {
    resolucion_h: 1024,
    resolucion_v: 768,
    refresco: 60,
    tono: {
        brillo: 90,
        contraste: 70
    }
};
// for (let configuracion in configuraciones) {
//     console.log(configuracion)
// }
var cont = 1;
// while(cont <= 10){
//     console.log(cont++)
// }
// switch (cont) {
//     case 1:
//         console.log('No es 11')
//         break;
//     case 11:
//         console.log('Es 11')
//         break;
//     default:
//         console.log('Es otro valor')
//         break;
// }
// console.log([] == 0, undefined == 0)
var sumar = function (a, b) {
    return a + b;
};
// console.log(sumar(1,2))
var cuadrado = function (n) { return n * n; };
// console.log(cuadrado(10))
var emitir = function () { return "Hola funcion"; };
// console.log(emitir())
var Persona = /** @class */ (function () {
    function Persona(nombre, paterno, materno) {
        var _this = this;
        this.nombreCompleto = function () { return _this.nombre + " " + _this.paterno + " " + _this.materno; };
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno = materno;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
var persona = new Persona('Name', 'last');
console.log(persona.Nombre);
