import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthServicService } from '../Services/auth-servic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogged: boolean | undefined;
  public subscription: Subscription;
  constructor(private auth: AuthServicService, private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log(this.auth.isLoggedIn);
    this.subscription = this.auth.Login.subscribe((result) => {
      this.isLogged = result;
    });
    this.isLogged = this.auth.isLoggedIn;
  }
  logOut() {
    this.auth.logout();
    this.isLogged = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
