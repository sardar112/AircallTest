import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AllCallsComponent } from './all-calls/all-calls.component';
import { CallDetailComponent } from './call-detail/call-detail.component';
import { MissedCallsComponent } from './missed-calls/missed-calls.component';
import { ArchivedCallsComponent } from './archived-calls/archived-calls.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenIntercepterService } from './Services/token-intercepter.service';
import { AuthServicService } from './Services/auth-servic.service';
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
    NgbModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
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
