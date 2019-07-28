import { Injectable } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SubventionPeche } from '../models/subventionPeche';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubventionPecheService {

  public subventionPeches: SubventionPeche[];
  public subventionPechesMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/subventionPeche';

  constructor(private http: HttpClient) {
    this.subventionPeches = [];
    this.subventionPechesMatTab = new MatTableDataSource(this.subventionPeches);
  }

  getTotalPrevue(): string {
    const result = this.subventionPeches.filter(e => e.state === 'Non');
    return result.map(t => t.cardValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get bons Valeur list
  getSubventionPechesList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<SubventionPeche[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'subventionPeches';
      this.subventionPeches = res[key];
      this.subventionPeches = this.subventionPeches.reverse();
      this.subventionPechesMatTab.data = this.subventionPeches;
      if (sort) {
        this.subventionPechesMatTab.sort = sort;
      }
      if (paginator) {
        this.subventionPechesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // get bons Valeur list by session id
  getSubventionPechesListById(sessionId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<SubventionPeche[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'subventionPeches';
      this.subventionPeches = res[key];
      this.subventionPeches = this.subventionPeches.reverse();
      this.subventionPeches = this.subventionPeches.filter(x => x.sessionId === sessionId);
      this.subventionPechesMatTab.data = this.subventionPeches;
      if (sort) {
        this.subventionPechesMatTab.sort = sort;
      }
      if (paginator) {
        this.subventionPechesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new subventionPeche
  addSubventionPeche(subventionPeche: SubventionPeche): Observable<any> {
    const request = { subventionPeche };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete subventionPeche
  deleteSubventionPeche(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update subventionPeche
  updateSubventionPeche(id: string, subventionPeche: SubventionPeche): Observable<any> {
    const request = {
      subventionPeche
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
