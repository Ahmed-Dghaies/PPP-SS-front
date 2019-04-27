import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from 'src/app/shared/models/session.model';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private uri = 'https://ppp-ss.herokuapp.com/session';
  public sessions: Session[];
  public sessionMatTab: MatTableDataSource<any>;

  constructor(private http: HttpClient) {
    this.sessions = [];
    this.sessionMatTab = new MatTableDataSource(this.sessions);
  }

  getCurrentSession(): void {
    this.http.get<Session[]>(`${this.uri}/get`).subscribe(res => {
      const key = 'result';
      this.sessions = res[key];
      this.sessionMatTab.data = this.sessions;
    },
      err => {
        console.log(err);
      });
  }



}
