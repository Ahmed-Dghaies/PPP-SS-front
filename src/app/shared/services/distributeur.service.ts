import { Injectable } from '@angular/core';
import { Distributeur } from '../models/distributeur.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistributeurService {

  public distributeurs: Distributeur[];
  public distributeursMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/distributeur';

  constructor(private http: HttpClient) {
    this.distributeurs = [];
    this.distributeursMatTab = new MatTableDataSource(this.distributeurs);
   }

  addDistributeur(distributeur) {
    return this.http.post<any>(`${this.uri}/add`, distributeur);
  }

  getDistributeursList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Distributeur[]>(`${this.uri}/list`).subscribe((data: Distributeur[]) => {
      this.distributeurs = data;
      this.distributeurs = this.distributeurs.reverse();
      this.distributeursMatTab.data = this.distributeurs;
      if (sort) {
        this.distributeursMatTab.sort = sort;
      }
      if (paginator) {
        this.distributeursMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  editDistributeur(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateDistributeur(id, distributeur) {
    return this.http.put(`${this.uri}/update/${id}`, distributeur);
  }

  deleteDistributeur(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
