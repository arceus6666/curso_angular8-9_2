import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../autenticacion/models/usuario.interface';
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
}
