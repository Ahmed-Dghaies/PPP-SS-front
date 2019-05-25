import { Injectable } from '@angular/core';
import { Carburant } from '../models/carburant';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrixCarburantService } from './prix-carburant.service';
import { PrixCarburant } from '../models/prixcarburant';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {

  public carburants: Carburant[];
  public carburantsMatTab: MatTableDataSource<any>;
  private uri = 'http://localhost:5000/carburant';

  constructor(private http: HttpClient) {
    this.carburants = [];
    this.carburantsMatTab = new MatTableDataSource(this.carburants);
  }

  // get carburants list
  getCarburantsList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Carburant[]>(`${this.uri}/list`).subscribe((data: Carburant[]) => {
      this.carburants = data;
      console.log(this.carburants);
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

  // add new carburant
  addCarburant(carburant: Carburant): Observable<any> {
    return this.http.post(`${this.uri}/add`, carburant);
  }

  // delete Carburant
  deleteCarburant(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Carburant
  updateCarburant(id: string, carburant: Carburant): Observable<any> {
    return this.http.put(`${this.uri}/update/${id}`, carburant);
  }

  // get by id
  getById(id: string) {
    return this.http.get<Carburant>(`${this.uri}/list/${id}`);
  }

  // get by reference
  getByRef(ref: string) {
    return this.http.get<Carburant>(`${this.uri}/list/getbyref/${ref}`);
  }



}
