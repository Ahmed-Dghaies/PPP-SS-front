import { Injectable } from '@angular/core';
import { BonValeur } from '../models/bonValeur.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonValeurService {

  public bonValeurs: BonValeur[];
  public bonValeursMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/bonValeur';

  constructor(private http: HttpClient) {
    this.bonValeurs = [];
    this.bonValeursMatTab = new MatTableDataSource(this.bonValeurs);
  }

  // get bons Valeur list
  getBonValeursList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<BonValeur[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'bonValeurs';
      this.bonValeurs = res[key];
      this.bonValeurs = this.bonValeurs.reverse();
      this.bonValeursMatTab.data = this.bonValeurs;
      if (sort) {
        this.bonValeursMatTab.sort = sort;
      }
      if (paginator) {
        this.bonValeursMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new bon Valeur
  addBonValeur(bonValeur: BonValeur): Observable<any> {
    const request = { bonValeur };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete bon Valeur
  deleteBonValeur(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update bon Valeur
  updateBonValeur(id: string, bonValeur: BonValeur): Observable<any> {
    const request = {
      bonValeur
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
