import { Injectable } from '@angular/core';
import { Espece } from '../models/espece';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspeceService {

  public especes: Espece[];
  public especesMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/espece';

  constructor(private http: HttpClient) {
    this.especes = [];
    this.especesMatTab = new MatTableDataSource(this.especes);
  }

  getTotalPrevue(): string {
    const result = this.especes.filter(e => e.state === 'Non');
    return result.map(t => t.totalValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get bons Valeur list
  getEspecesList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Espece[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'especes';
      this.especes = res[key];
      this.especes = this.especes.reverse();
      this.especesMatTab.data = this.especes;
      if (sort) {
        this.especesMatTab.sort = sort;
      }
      if (paginator) {
        this.especesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // get bons Valeur list by session id
  getEspecesListById(sessionId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Espece[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'especes';
      this.especes = res[key];
      this.especes = this.especes.reverse();
      this.especes = this.especes.filter(x => x.sessionId === sessionId);
      this.especesMatTab.data = this.especes;
      if (sort) {
        this.especesMatTab.sort = sort;
      }
      if (paginator) {
        this.especesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new Espece
  addEspece(espece: Espece): Observable<any> {
    const request = { espece };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Espece
  deleteEspece(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Espece
  updateEspece(id: string, espece: Espece): Observable<any> {
    const request = {
      espece
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
