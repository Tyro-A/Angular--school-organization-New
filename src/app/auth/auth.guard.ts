import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private service: UserService, private toastr: ToastrService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null){
      const roles = next.data['permittedRoles'] as Array<string>;
      if (roles){
        if (this.service.roleMatch(roles)){
           return true;
          }
        else{
          this.toastr.error('Your not able to use that role', 'Unauthorized');
          return false; }
      }
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }

  }
}
