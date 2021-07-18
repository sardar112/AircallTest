import { Injectable } from '@angular/core';
import   {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { AuthServicService } from './auth-servic.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {
  constructor(private auth : AuthServicService) { }

  intercept(req : HttpRequest<any>, next : HttpHandler){
     const token  =  req.clone({
      setHeaders:{
        // Authorization: "Bearer"+this.auth.getToken()
        Authorization: `Bearer ${this.auth.getToken()}`

      }
    })

  return next.handle(token);

  }
}
