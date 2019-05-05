import { Injectable } from '@angular/core';
import { Pompiste } from '../models/pompiste.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PompisteService {
  private uri = 'https://ppp-ss.herokuapp.com/pompiste';

  public pompistes: Pompiste[];
  public pompistesMatTab: MatTableDataSource<any>;

  constructor(private http: HttpClient) {
    this.pompistes = [];
    this.pompistesMatTab = new MatTableDataSource(this.pompistes);
  }

  // get pompistes list
  getpompistesList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Pompiste[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'pompistes';
      this.pompistes = res[key];
      this.pompistes = this.pompistes.reverse();
      this.pompistesMatTab.data = this.pompistes;
      if (sort) {
        this.pompistesMatTab.sort = sort;
      }
      if (paginator) {
        this.pompistesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new pompiste
  addpompiste(pompiste: Pompiste): Observable<any> {
    const request = { pompiste };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Pompiste
  deletePompiste(id: string): Observable<any> {

    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Pompiste
  updatePompiste(id: string, pompiste: Pompiste): Observable<any> {
    const request = {
      pompiste
    };

    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
