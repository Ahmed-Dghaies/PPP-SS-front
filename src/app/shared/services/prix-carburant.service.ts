import { Injectable } from '@angular/core';
import { Carburant } from '../models/carburant';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrixCarburantService {

  public carburants: Carburant[];
  public carburantsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/carburant';

  constructor(private http: HttpClient) {
    this.carburants = [];
    this.carburantsMatTab = new MatTableDataSource(this.carburants);
  }

  addCarburant(carburant) {
    return this.http.post<any>(`${this.uri}/add`, carburant);
  }

  change(input: string) {
    const num = input.slice(1);
    let res = parseInt(num, 10);
    res++;
    const result = 'P' + res;
    return result;
  }

  updateIdentifiantPrix(carburant: string) {
    const res = this.carburants.filter(x => x.carburant === carburant);
    let i;
    for (i = 0; i < res.length; i++) {
      res[i].identifiantPrix = this.change(res[i].identifiantPrix);
    }
    return this.http.put(`${this.uri}/updateList/`, res);

  }

  getPrix(input: string) {
    return this.http.get<any>(`${this.uri}/getPrix/${input}`);
  }

  getCarburantList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Carburant[]>(`${this.uri}/list`).subscribe((data: Carburant[]) => {
      this.carburants = data;
      this.carburants = this.carburants.reverse();
      this.carburantsMatTab.data = this.carburants;
      if (sort) {
        this.carburantsMatTab.sort = sort;
      }
      if (paginator) {
        this.carburantsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  editCarburant(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateCarburant(id, carburant) {
    return this.http.put(`${this.uri}/update/${id}`, carburant);
  }

  deleteCarburant(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
