import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { RegisterComponent } from './Components/Authentification/register/register.component';
import { LoginComponent } from './Components/Authentification/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './shared/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'parameters',
    component: ParametersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
