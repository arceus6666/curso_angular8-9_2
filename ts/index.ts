let mensaje = "Hola Typescript";
// console.log(mensaje);

let nombre: String = 'Daniel';

let apellido: String;

apellido = 'Mendoza';

// console.log(nombre);
// console.log(apellido);

let edad: Number = 34.123456789;

let redondeado: Number = parseFloat(edad.toFixed(2));

// console.log(redondeado);

let esBoliviano: Boolean = false;

// console.log(!esBoliviano)

let telefonos: Array<Number> = [];

telefonos.push(123456)
telefonos.push(987654)

// console.log(telefonos)

let opciones: any;

opciones = 1;

opciones = false;

opciones = 'hola ts';

opciones = {
    brillo: 70,
    contraste: 80,
};

// console.log(opciones)

let listaOpciones: Array<any> = [];

listaOpciones.push({ brillo: 90, contraste: 70 })
listaOpciones.push({ brillo: 9, contraste: 7 })
listaOpciones.push(10)
listaOpciones.push(true)
listaOpciones.push(null)

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

let configuraciones: any = {
    resolucion_h: 1024,
    resolucion_v: 768,
    refresco: 60,
    tono: {
        brillo: 90,
        contraste: 70,
    },
}

// for (let configuracion in configuraciones) {
//     console.log(configuracion)
// }

let cont: number = 1;

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

const sumar = (a: number, b: number): number => {
    return a + b;
}

// console.log(sumar(1,2))

const cuadrado = n => n * n

// console.log(cuadrado(10))

const emitir = () => "Hola funcion"

// console.log(emitir())

class Persona {
    nombre: String;
    paterno: String;
    materno: String;
    constructor(nombre: String, paterno?: String, materno?:String) {
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno = materno;
    }

    nombreCompleto = () => `${this.nombre} ${this.paterno} ${this.materno}`

    public get Nombre(): String {
        return this.nombre;
    }

    
    public set Nombre(nombre : String) {
        this.nombre = nombre;
    }
    
}

let persona = new Persona('Name', 'last');

console.log(persona.Nombre)




