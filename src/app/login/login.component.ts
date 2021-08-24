import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServicService } from '../Services/auth-servic.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private fb:FormBuilder,private router:Router,
    private auth:AuthServicService,private toastr: ToastrService
     ) { }

  loginForm: FormGroup ;

  ngOnInit(): void {
    this.loginForm = this.fb.group({

      username: ['',Validators.required],
      password: ['' ,Validators.required]
  
      })
  }

  onSubmit(){

    this.auth.login(this.loginForm.value).subscribe(res=> {
        if(res){
          this.toastr.success("Login Succesfully",'Success');
         localStorage.setItem('token',res.access_token.toString());
         this.router.navigate(['/allCalls']);
        //  this.auth.refresh_token(this.loginForm.value).subscribe(data => {
        //   localStorage.setItem('token',data.access_token.toString());
        //   this.router.navigate(['/allCalls']);
        // });
        this.auth.Login.next(this.auth.isLoggedIn);
         
        }
        else {
          this.toastr.error("Error",'Error');

        }
    })
  
  }

}
