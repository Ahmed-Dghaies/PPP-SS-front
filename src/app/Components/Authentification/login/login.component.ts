import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = { email: '', password: '' };
  constructor(
    private auth: AuthService,
    private route: Router) { }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.route.navigate(['/home']);
    }
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.route.navigate(['/home']);
        },
        err => console.log(err)
      );
  }

}
