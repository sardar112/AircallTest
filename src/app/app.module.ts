import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AllCallsComponent } from './all-calls/all-calls.component';
import { CallDetailComponent } from './call-detail/call-detail.component';
import { MissedCallsComponent } from './missed-calls/missed-calls.component';
import { ArchivedCallsComponent } from './archived-calls/archived-calls.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TokenIntercepterService } from './Services/token-intercepter.service';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllCallsComponent,
    CallDetailComponent,
    MissedCallsComponent,
    ArchivedCallsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass:'toast-top-right',
      preventDuplicates: true,
    }),
    ],
  providers: [
   { provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
