import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modules/usuarios/models/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getListaUsuarios() {
    // const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return this.http.get<Usuario[]>(`${environment.baseUrl}/usuarios/`);
  }

  getDetalleUsuario(id: string) {
    return this.http.get<Usuario>(`${environment.baseUrl}/usuarios/${id}`);
  }

  crearUsuario(body: Usuario) {
    return this.http.post<Usuario>(`${environment.baseUrl}/usuarios`, body);
  }

  borrarUsuario(id: string) {
    return this.http.delete<any>(`${environment.baseUrl}/usuarios/${id}`);
  }

  actualizarUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(`${environment.baseUrl}/usuarios/${usuario._id}`, usuario);
  }
}
