import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private userService:UserService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    if(this.userService.isAdminRights()){
      return true;
    }
    else{
      alert("You don’t have permission to view this page,Redirect to Home");
      this.router.navigate(['home']);
    }
  }
 
}
