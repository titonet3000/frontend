import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    


    if (sessionStorage.getItem('currentUser')) {
            let nombre = JSON.parse(sessionStorage.getItem('currentUser'));
            nombre = nombre.NOMBRE_EMP;
            if (sessionStorage.getItem(nombre)) {
                // logged in so return true
                return true;
            }
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;

  }
  
}
