import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Credit } from '../models/credit.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  public credits: Credit[];
  public creditsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/credit';

  constructor(private http: HttpClient) {
    this.credits = [];
    this.creditsMatTab = new MatTableDataSource(this.credits);
  }

  getTotalPrevue(): string {
    return this.credits.map(t => t.creditRestValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get credits list
  getCreditsList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Credit[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'credits';
      this.credits = res[key];
      if (this.credits.length > 0) {
        this.credits = this.credits.reverse();
      }
      this.creditsMatTab.data = this.credits;
      if (sort) {
        this.creditsMatTab.sort = sort;
      }
      if (paginator) {
        this.creditsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new credit
  addCredit(credit: Credit): Observable<any> {
    const request = { credit };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Credit
  deleteCredit(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Credit
  updateCredit(id: string, credit: Credit): Observable<any> {
    const request = {
      credit
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
