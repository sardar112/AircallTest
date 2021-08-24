import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import Pusher from 'pusher-js';

import { Login, User } from '../Interface/interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthServicService {
  
 public Login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    
  constructor(private http: HttpClient,private router : Router , private toastr: ToastrService) {
  }
  

  login(data: User)  {
   return this.http.post<User>(" https://frontend-test-api.aircall.io/auth/login",data)
  }
  refresh_token(data:any)  {
    return this.http.post<any>(" https://frontend-test-api.aircall.io/auth/refresh-token",data)
   }


  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    return (token !== null) ? true : false;
  }



  logout() {
    this.toastr.success("LogOut Succesfully",'Success');
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }
}
