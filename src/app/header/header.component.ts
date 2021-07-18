import { Component, OnInit } from '@angular/core';
import { AuthServicService } from '../Services/auth-servic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean | undefined;
  isLoggedOut:boolean | undefined;
  constructor(private auth: AuthServicService) { }

  ngOnInit(): void {
    this.isLogged=this.auth.isLoggedIn;
   

  }
 logOut() {
   this.auth.logout();
   this.isLogged=false;


 }
}
