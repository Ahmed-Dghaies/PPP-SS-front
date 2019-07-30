import { Injectable } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ContreBon } from '../models/contreBon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContreBonService {

  public contreBons: ContreBon[];
  public contreBonsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/contreBon';

  constructor(private http: HttpClient) {
    this.contreBons = [];
    this.contreBonsMatTab = new MatTableDataSource(this.contreBons);
  }

  // get contreBons list
  getContreBonsList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<ContreBon[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'contreBons';
      this.contreBons = res[key];
      this.contreBons = this.contreBons.reverse();
      this.contreBonsMatTab.data = this.contreBons;
      if (sort) {
        this.contreBonsMatTab.sort = sort;
      }
      if (paginator) {
        this.contreBonsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new contreBon
  addContreBon(contreBon: ContreBon, numberOfCards: number): Observable<any> {
    const request = { contreBon };
    return this.http.post(`${this.uri}/add/${numberOfCards}`, request);
  }

  // delete contreBon
  deleteContreBon(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update contreBon
  updateContreBon(id: string, contreBon: ContreBon): Observable<any> {
    const request = {
      contreBon
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
