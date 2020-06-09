import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './models/usuario.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    return this.http.post<Usuario>(`http://localhost:9000/auth/login`, {
      email,
      password,
    }).pipe(
      map(
        user => {
          if (user && user.llave) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
          }
        }
      )
    );
  }

  public logout() {
    sessionStorage.removeItem('currentUser');
  }
}
