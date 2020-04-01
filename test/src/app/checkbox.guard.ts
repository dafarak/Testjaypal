import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CheckboxGuard implements CanActivate {

  constructor (
    private rout: Router,
   ) {
  
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var object = localStorage.getItem('response')
      if(object == "true")  {
console.log("test")
// this.rout.navigate(['/view']);
        return true;
      }
      else {
        // this.rout.navigate(['/dashbord/details']);
        
        console.log("true")
        this.rout.navigate(['/user']);
        return false;
      }
    }
}
