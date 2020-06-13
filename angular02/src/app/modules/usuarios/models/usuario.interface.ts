export interface Usuario {
  nombre: string;
  password: string;
  email: string;
  rol: string;
  _id: string;
  creado: Date;
  modificado: Date;
  estado: boolean;
}
