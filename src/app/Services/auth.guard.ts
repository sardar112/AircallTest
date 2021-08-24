import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthServicService } from '../Services/auth-servic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  auth: AuthServicService,private router : Router ,private toastr: ToastrService){}
  canActivate() : boolean {
    if(this.auth.isLoggedIn !==true){
      this.toastr.error("Please Login",'Error');
      this.router.navigate(['/']);
    }
     return true;
    
  }
  
}
