import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCallsComponent } from './all-calls/all-calls.component';
import { ArchivedCallsComponent } from './archived-calls/archived-calls.component';
import { CallDetailComponent } from './call-detail/call-detail.component';
import { LoginComponent } from './login/login.component';
import { MissedCallsComponent } from './missed-calls/missed-calls.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
{ path: '', component:LoginComponent ,},
{ path: 'allCalls', component:AllCallsComponent, canActivate:[AuthGuard]},
{ path: 'callDetail/:id', component:CallDetailComponent , canActivate:[AuthGuard]},
{ path: 'archivedCalls', component:ArchivedCallsComponent ,canActivate:[AuthGuard]},
{ path: 'missedCalls', component:MissedCallsComponent , canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
