import { Injectable } from '@angular/core';
import { Bank } from '../models/bank';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  public banks: Bank[];
  public banksMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/bank';

  constructor(private http: HttpClient) {
    this.banks = [];
    this.banksMatTab = new MatTableDataSource(this.banks);
  }

  // get banks list
  getBanksList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Bank[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'banks';
      this.banks = res[key];
      this.banks = this.banks.reverse();
      this.banksMatTab.data = this.banks;
      if (sort) {
        this.banksMatTab.sort = sort;
      }
      if (paginator) {
        this.banksMatTab.paginator = paginator;
      }
    },
      err => {
        console.log(err);
      });
  }

  // add new bank
  addBank(bank: Bank): Observable<any> {
    const request = { bank };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete bank
  deleteBank(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update bank
  updateBank(id: string, bank: Bank): Observable<any> {
    const request = {
      bank
    };
    return this.http.put(`${this.uri}/update/${id}`, request);

  }
}
