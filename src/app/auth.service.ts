import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registredUrl = 'https://ppp-ss.herokuapp.com/api/register';
  private loginUrl = 'https://ppp-ss.herokuapp.com/api/login';
  constructor(private http : HttpClient,
    private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.registredUrl,user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl,user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
