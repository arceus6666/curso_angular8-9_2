import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AutenticacionService } from './modules/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Injectable()
export class NoAutorizadoInterceptor implements HttpInterceptor {

  constructor(private auth: AutenticacionService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error: any) => {
      if (error instanceof HttpErrorResponse) {
        const mensaje = error.error.mensaje || error.message;
        if (error.status === 401) {
          this.auth.logout();
          this.router.navigate(['/auth/login']);
        }
        return throwError(error);
      }
    }));
  }
}
