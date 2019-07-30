import { Injectable } from '@angular/core';
import { ContreBonClient } from '../models/contreBonClient';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContreBonClientService {

  public contreBonClient: ContreBonClient[];
  public contreBonClientMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/contreBonClient';

  constructor(private http: HttpClient) {
    this.contreBonClient = [];
    this.contreBonClientMatTab = new MatTableDataSource(this.contreBonClient);
  }

  getTotalPrevue(): string {
    return this.contreBonClient.map(c => c.cardValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get contreBons list
  getContreBonClientList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<ContreBonClient[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'contreBonClients';
      this.contreBonClient = res[key];
      this.contreBonClient = this.contreBonClient.reverse();
      this.contreBonClientMatTab.data = this.contreBonClient;
      if (sort) {
        this.contreBonClientMatTab.sort = sort;
      }
      if (paginator) {
        this.contreBonClientMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  getContreBonClientListById(sessionId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<ContreBonClient[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'contreBonClients';
      this.contreBonClient = res[key];
      this.contreBonClient = this.contreBonClient.reverse();
      this.contreBonClient = this.contreBonClient.filter( c => c.sessionId === sessionId);
      this.contreBonClientMatTab.data = this.contreBonClient;
      if (sort) {
        this.contreBonClientMatTab.sort = sort;
      }
      if (paginator) {
        this.contreBonClientMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new contreBon
  addContreBonClient(contreBonClient: ContreBonClient): Observable<any> {
    const request = { contreBonClient };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete contreBon
  deleteContreBonClient(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update contreBon
  updateContreBonClient(id: string, contreBonClient: ContreBonClient): Observable<any> {
    const request = {
      contreBonClient
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
