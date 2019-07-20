import { Injectable } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PayementCredit } from '../models/payementCredit.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayementCreditService {

  public payementCredits: PayementCredit[];
  public payementCreditsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/payementCredit';

  constructor(private http: HttpClient) {
    this.payementCredits = [];
    this.payementCreditsMatTab = new MatTableDataSource(this.payementCredits);
  }

  getTotalPrevue(): string {
    return this.payementCredits.map(t => t.payementValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get payement credits list
  getPayementCreditsList(sessionId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<PayementCredit[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'payementCredits';
      this.payementCredits = res[key];
      if (this.payementCredits.length > 0) {
        this.payementCredits = this.payementCredits.reverse();
        this.payementCredits = this.payementCredits.filter(x => x.sessionId === sessionId);
      }
      this.payementCreditsMatTab.data = this.payementCredits;
      if (sort) {
        this.payementCreditsMatTab.sort = sort;
      }
      if (paginator) {
        this.payementCreditsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new credit
  addPayementCredit(payementCredit: PayementCredit): Observable<any> {
    const request = { payementCredit };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Credit
  deletePayementCredit(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Credit
  updatePayementCredit(id: string, payementCredit: PayementCredit): Observable<any> {
    const request = {
      payementCredit
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
