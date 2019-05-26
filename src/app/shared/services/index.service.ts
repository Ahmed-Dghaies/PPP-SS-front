import { Injectable } from '@angular/core';
import { Index } from '../models/Index.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/carburant';
import { CarburantService } from './carburant.service';
import { CiterneService } from './citerne.service';
import { Citerne } from '../models/citerne.model';
import { DistributeurService } from './distributeur.service';
import { Distributeur } from '../models/distributeur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public indexs: Index[];
  public carburant: string;
  public indexsMatTab: MatTableDataSource<any>;


  private uri = 'https://ppp-ss.herokuapp.com/index';

  constructor(private http: HttpClient,
              private citerneService: CiterneService,
              private distributeurService: DistributeurService,
              private carburantService: CarburantService) {
    this.indexs = [];
    this.carburant = '';
    this.indexsMatTab = new MatTableDataSource(this.indexs);
  }

  addIndex(index) {
    return this.http.post<any>(`${this.uri}/add`, index);
  }

  getCarburant(reference: string) {
    return this.http.get<any>(`${this.uri}/getCarburant/${reference}`);
  }

  getIndexList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Index[]>(`${this.uri}/list`).subscribe((data: Index[]) => {
      this.indexs = data;

      let citerne: Citerne;
      let distributeur: Distributeur;
      this.indexs.forEach((element: Index) => {
        this.citerneService.getCiterneById(element.citerne).subscribe((cit: Citerne) => {
          citerne = cit;
          element.citerne = citerne.code;
          this.carburantService.getById(citerne.carburant).subscribe((ref: Carburant) => {
            element.carburant = ref.ref;
          });
        });

        this.distributeurService.getById(element.distributeur).subscribe((dis: Distributeur) => {
          distributeur = dis;
          element.distributeur = distributeur.reference;
        });
      });
      this.indexs = this.indexs.reverse();
      this.indexsMatTab.data = this.indexs;
      if (sort) {
        this.indexsMatTab.sort = sort;
      }
      if (paginator) {
        this.indexsMatTab.paginator = paginator;
      }
    },
      err => {
        console.log(err);
      });
  }

  editIndex(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateIndex(id, index) {
    return this.http.put(`${this.uri}/update/${id}`, index);
  }

  deleteIndex(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  getIndexByCiterne(code: string): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.uri}/list/indexbyciterne/${code}`);
  }

  getIndexByDistributeur(code: string): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.uri}/list/indexbydistributeur/${code}`);
  }

}
