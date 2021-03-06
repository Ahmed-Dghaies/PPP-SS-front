import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { RegisterComponent } from './Components/Authentification/register/register.component';
import { LoginComponent } from './Components/Authentification/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './shared/Guards/auth.guard';
import { CheckCurrentSessionComponent } from './Components/check-current-session/check-current-session.component';
import { InventaireComponent } from './Components/inventaire/inventaire.component';

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
  },
  {
    path: 'session',
    component: CheckCurrentSessionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventaire',
    component: InventaireComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
