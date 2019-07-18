import { Injectable } from '@angular/core';
import { Cheque } from '../models/Cheque.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  public cheques: Cheque[];
  public chequesMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/cheque';

  constructor(private http: HttpClient) {
    this.cheques = [];
    this.chequesMatTab = new MatTableDataSource(this.cheques);
  }

  getTotalPrevue(): string {
    return this.cheques.map(t => t.chequeValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get cheques list
  getChequesList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Cheque[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'cheques';
      this.cheques = res[key];
      this.cheques = this.cheques.reverse();
      this.chequesMatTab.data = this.cheques;
      if (sort) {
        this.chequesMatTab.sort = sort;
      }
      if (paginator) {
        this.chequesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // get cheques list by session id
  getChequesListById(sessionId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Cheque[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'cheques';
      this.cheques = res[key];
      this.cheques = this.cheques.reverse();
      this.cheques = this.cheques.filter(x => x.sessionId === sessionId);
      this.chequesMatTab.data = this.cheques;
      if (sort) {
        this.chequesMatTab.sort = sort;
      }
      if (paginator) {
        this.chequesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new cheque
  addCheque(cheque: Cheque): Observable<any> {
    const request = { cheque };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Cheque
  deleteCheque(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Cheque
  updateCheque(id: string, cheque: Cheque): Observable<any> {
    const request = {
      cheque
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
