import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from 'app/shared/models/session.model';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { ReleveIndexService } from './releveIndex.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private uri = 'https://ppp-ss.herokuapp.com/session';
  public sessions: Session[];
  public currentSessionId: string;
  public sessionMatTab: MatTableDataSource<any>;

  constructor(private http: HttpClient,
              public releveIndexService: ReleveIndexService) {
    this.sessions = [];
    this.currentSessionId = '';
    this.sessionMatTab = new MatTableDataSource(this.sessions);
  }


  closeSession(): Observable<any> {
    return this.http.put(`${this.uri}/closeSession`, 'close');
  }

  OpenNewSession(): void {

  }

  getCurrentSession(): void {
    this.http.get<Session[]>(`${this.uri}/get`).subscribe(res => {
      const key = 'result';
      this.sessions = res[key];
      this.sessionMatTab.data = this.sessions;
      if (this.sessions[0]) {
        this.currentSessionId = this.sessions[0]._id;
        this.releveIndexService.getReleveIndexsList(this.sessions[0]._id);
      }
    },
      err => {
        console.log(err);
      });
  }

  updateSession(id, session) {
    return this.http.put(`${this.uri}/update/${id}`, session);
  }

  deletePompisteFromSession(idPompiste: string, idSession: string): Observable<any> {
    const request = {
      idSession,
      idPompiste
    };
    return this.http.put(`${this.uri}/delete-pompiste`, request);
  }

  addPompisteToSession(pompisteVM: any, idSession: string): Observable<any> {
    const request = {
      idSession,
      pompistes: [pompisteVM]
    };

    return this.http.put(`${this.uri}/add-pompistes`, request);
  }


}
