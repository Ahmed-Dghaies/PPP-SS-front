import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ContreBonCaisse } from '../models/contreBonCaisse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContreBonCaisseService {

  public contreBonCaisse: ContreBonCaisse[];
  public contreBonCaisseMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/contreBonCaisse';

  constructor(private http: HttpClient) {
    this.contreBonCaisse = [];
    this.contreBonCaisseMatTab = new MatTableDataSource(this.contreBonCaisse);
  }

  getTotalPrevue(): string {
    return this.contreBonCaisse.map(c => c.cardValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get contreBons list
  getContreBonCaisseList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<ContreBonCaisse[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'contreBonCaisses';
      this.contreBonCaisse = res[key];
      this.contreBonCaisse = this.contreBonCaisse.reverse();
      this.contreBonCaisseMatTab.data = this.contreBonCaisse;
      if (sort) {
        this.contreBonCaisseMatTab.sort = sort;
      }
      if (paginator) {
        this.contreBonCaisseMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  getContreBonCaisseListById(sessionId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<ContreBonCaisse[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'contreBonCaisses';
      this.contreBonCaisse = res[key];
      this.contreBonCaisse = this.contreBonCaisse.reverse();
      this.contreBonCaisse = this.contreBonCaisse.filter( c => c.sessionId === sessionId);
      this.contreBonCaisseMatTab.data = this.contreBonCaisse;
      if (sort) {
        this.contreBonCaisseMatTab.sort = sort;
      }
      if (paginator) {
        this.contreBonCaisseMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new contreBon
  addContreBonCaisse(contreBonCaisse: ContreBonCaisse): Observable<any> {
    const request = { contreBonCaisse };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete contreBon
  deleteContreBonCaisse(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update contreBon
  updateContreBonCaisse(id: string, contreBonCaisse: ContreBonCaisse): Observable<any> {
    const request = {
      contreBonCaisse
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
