import { Injectable } from '@angular/core';
import { StegEtAutre } from '../models/StegEtAutre.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarburantService } from './carburant.service';
import { Carburant } from '../models/carburant';

@Injectable({
  providedIn: 'root'
})
export class StegEtAutresService {

  public stegEtAutres: StegEtAutre[];
  public stegEtAutresMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/stegEtAutre';

  constructor(private http: HttpClient,
              private carburantService: CarburantService) {
    this.stegEtAutres = [];
    this.stegEtAutresMatTab = new MatTableDataSource(this.stegEtAutres);
  }

  getTotalPrevue(): string {
    return this.stegEtAutres.map(t => t.totalValue).reduce((acc, value) => acc + value, 0).toFixed(3);
  }

  // get stegEtAutres list
  getStegEtAutresList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<StegEtAutre[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'stegEtAutres';
      this.stegEtAutres = res[key];
      if (this.stegEtAutres.length > 0) {
        let carburant: Carburant;
        this.stegEtAutres.forEach((element: StegEtAutre) => {
          this.carburantService.getById(element.carburant).subscribe((carb: Carburant) => {
            carburant = carb;
            element.carburant = carburant.ref;
          });
        });
        this.stegEtAutres = this.stegEtAutres.reverse();
      }
      this.stegEtAutresMatTab.data = this.stegEtAutres;
      if (sort) {
        this.stegEtAutresMatTab.sort = sort;
      }
      if (paginator) {
        this.stegEtAutresMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new stegEtAutre
  addStegEtAutre(stegEtAutre: StegEtAutre): Observable<any> {
    const request = { stegEtAutre };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete stegEtAutre
  deleteStegEtAutre(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update stegEtAutre
  updateStegEtAutre(id: string, stegEtAutre: StegEtAutre): Observable<any> {
    const request = {
      stegEtAutre
    };
    return this.http.put(`${this.uri}/update/${id}`, request);
  }
}
