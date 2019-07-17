import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  constructor(
    public authService: AuthService,
    private _router: Router) {
    this._router.events.subscribe((event: Event) => {
    });
  }
}
