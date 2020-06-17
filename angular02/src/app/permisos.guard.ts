import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './modules/autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AutenticacionService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const user = this.auth.currentUser();
    if (user) {
      if (next.data.roles && next.data.roles.indexOf(user.rol) === -1) {
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

}
