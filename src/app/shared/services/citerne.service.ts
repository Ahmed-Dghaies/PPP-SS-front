import { Injectable } from '@angular/core';
import { Citerne } from '../models/citerne.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Carburant } from '../models/carburant';
import { CarburantService } from './carburant.service';

@Injectable({
  providedIn: 'root'
})
export class CiterneService {

  public citernes: Citerne[];
  public citernesMatTab: MatTableDataSource<any>;

  private uri = 'http://localhost:5000/citerne';



  constructor(private http: HttpClient,
              private carburantService: CarburantService) {
    this.citernes = [];
    this.citernesMatTab = new MatTableDataSource(this.citernes);
  }

  // get citernes list
  getCiternesList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Citerne[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'citernes';
      this.citernes = res[key];

      let carburant: Carburant;
      this.citernes.forEach((element: Citerne) => {
        this.carburantService.getById(element.carburant).subscribe((data: Carburant) => {
          carburant = data;
          element.carburant = carburant.ref;
        });
      });

      this.citernes = this.citernes.reverse();
      this.citernesMatTab.data = this.citernes;
      if (sort) {
        this.citernesMatTab.sort = sort;
      }
      if (paginator) {
        this.citernesMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }


  // add new citerne
  addCiterne(citerne: Citerne): Observable<any> {
    const request = { citerne };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Citerne
  deleteCiterne(id: string): Observable<any> {

    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Citerne
  updateCiterne(id: string, citerne: Citerne): Observable<any> {
    const request = {
      citerne
    };

    return this.http.put(`${this.uri}/update/${id}`, request);
  }

  // get citerne by ID
  getCiterneById(id: string) {
    return this.http.get<Citerne>(`${this.uri}/list/${id}`);
  }

  // get by code
  getCiterneByCode(code: string) {
    return this.http.get<Citerne>(`${this.uri}/list/getbycode/${code}`);
  }

  // get citerne list of carburant
  getCiterneByCarburant(carburant: string) {
    return this.http.get<Citerne[]>(`${this.uri}/list/carburant/${carburant}`);
  }





}
