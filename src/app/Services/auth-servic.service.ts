import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import Pusher from 'pusher-js';

import { Login, User } from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServicService {
  private subject: Subject<any> = new Subject<any>();
  private pusherClient: Pusher;
    
  constructor(private http: HttpClient,private router : Router) {
    this.pusherClient = new Pusher('d44e3d910d38a928e0be', { cluster: 'eu' });

    const channel = this.pusherClient.subscribe('realtime-feeds');

    channel.bind(
      'posts',
      (data: { title: string; body: string; time: string }) => {
        // this.subject.next(new Feed(data.title, data.body, new Date(data.time)));
      }
    );
  }
  pusher()  {
    return this.http.get<any>(" https://frontend-test-api.aircall.io/pusher/auth")
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
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }
}
