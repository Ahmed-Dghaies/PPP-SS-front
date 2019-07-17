import { Injectable } from '@angular/core';
import { CarteBon } from '../models/carteBon.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteBonService {

  public carteBons: CarteBon[];
  public carteBonsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/carteBon';

  constructor(private http: HttpClient) {
    this.carteBons = [];
    this.carteBonsMatTab = new MatTableDataSource(this.carteBons);
  }

  getTotalPrevue(): string {
    return this.carteBons.map(t => t.totalValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get carteBons list
  getCarteBonsList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<CarteBon[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'carteBons';
      this.carteBons = res[key];
      this.carteBons = this.carteBons.reverse();
      this.carteBonsMatTab.data = this.carteBons;
      if (sort) {
        this.carteBonsMatTab.sort = sort;
      }
      if (paginator) {
        this.carteBonsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new carteBon
  addCarteBon(carteBon: CarteBon): Observable<any> {
    const request = { carteBon };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete CarteBon
  deleteCarteBon(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update CarteBon
  updateCarteBon(id: string, carteBon: CarteBon): Observable<any> {
    const request = {
      carteBon
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
