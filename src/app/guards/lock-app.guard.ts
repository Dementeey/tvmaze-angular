import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LockAppGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!!+localStorage.getItem('login')) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}


// let {userName, password}: AuthData  = JSON.parse(localStorage.getItem('user'));

// this.router.navigate(['/login']);
// constructor(private router: Router) {}

// {
// "firstName":"Антон",
// "lastName":"Лойко",
// "email":"metallist9656@gmail.com",
// "userName":"Dementeey",
// "password":"12Qews1",
// "birthday":"10/13/1999",
// "phone":"+38-097-537-08-98",
// "radioMale":true,
// "radioFemale":true,
// "select":""}
