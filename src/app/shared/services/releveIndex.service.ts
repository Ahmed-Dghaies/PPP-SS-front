import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IndexVM } from '../models/view_models/IndexVM.model';
import { HttpClient } from '@angular/common/http';
import { Index } from '../models/Index.model';
import { SessionService } from './session.service';
import { Session } from '../models/session.model';
import { Observable } from 'rxjs';
import { IndexService } from './index.service';

@Injectable({
  providedIn: 'root'
})
export class ReleveIndexService {

  public releveIndexs: IndexVM[];
  public releveIndexsMatTab: MatTableDataSource<any>;
  public list: string[];
  public indexs: Index[];
  public pompistes: any[];

  private uri = 'https://ppp-ss.herokuapp.com/recette';
  private indexUri = 'https://ppp-ss.herokuapp.com/index';
  private sessionUri = 'https://ppp-ss.herokuapp.com/session';

  constructor(private http: HttpClient) {
    this.releveIndexs = [];
    this.list = [];
    this.indexs = [];
    this.pompistes = [];
    this.releveIndexsMatTab = new MatTableDataSource(this.releveIndexs);
  }

  getDatePoste = () => {
    const datetime = new Date();
    let date = datetime.toISOString().slice(0, 10);
    const hour = datetime.getHours();
    const dd = new Date(datetime.setDate(datetime.getDate() - 1));
    const yesterday = dd.toISOString().slice(0, 10);
    let poste = '';
    if ((hour >= 6) && (hour < 14)) { poste = 'P1'; }
// tslint:disable-next-line: one-line
    else if ((hour >= 14) && (hour < 22)) { poste = 'P2'; }
// tslint:disable-next-line: one-line
    else if ((hour === 22) || (hour === 23)) { poste = 'P3'; }
// tslint:disable-next-line: one-line
    else if ((hour >= 0) && (hour < 6)) { poste = 'P3'; date = yesterday; }
    return date.concat(poste);
}

  addReleveIndex(releveIndex) {
    return this.http.post<any>(`${this.uri}/addReleveIndex`, releveIndex);
  }

  getReleveIndexsList(currentId: string, sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<IndexVM[]>(`${this.uri}/listReleveIndex/${currentId}`).subscribe((data: IndexVM[]) => {
      this.releveIndexs = data;
      this.releveIndexs = this.releveIndexs.reverse();
      this.releveIndexsMatTab.data = this.releveIndexs;
      if (sort) {
        this.releveIndexsMatTab.sort = sort;
      }
      if (paginator) {
        this.releveIndexsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  getIndexsNames(): void {
    this.list = [];
    this.http.get<Index[]>(`${this.indexUri}/list`).subscribe((data: Index[]) => {
      this.indexs = data;
      let i;
      for (i = 0; i < this.indexs.length; i++) {
        this.list.push(this.indexs[i].reference);
      }
    },
      err => {
        console.log(err);
      });
  }

  getSessionPompiste(): void {
    this.http.get(`${this.sessionUri}/get-session-pompiste`).subscribe(res => {
      const key = 'pompistes';
      this.pompistes = res[key].map(p => {
        return {
          _id: p._id,
          nom: p.nom_pompiste
        };
      });
    },
    err => {
      console.log(err);
    });
  }

  editReleveIndex(id) {
    return this.http.get(`${this.uri}/editReleveIndex/${id}`);
  }

  updateReleveIndex(id, index) {
    return this.http.put(`${this.uri}/updateReleveIndex/${id}`, index);
  }

  deleteReleveIndex(id) {
    return this.http.delete(`${this.uri}/deleteReleveIndex/${id}`);
  }


  // get total revenue
  getTotlaRevenue(): Observable<any> {
    const month = new Date().getMonth() + 1;
    return this.http.get(`${this.uri}/totalRevenue?month=${month}`);
  }

  // get quantité carburant
  getQuantiteCarburant(): Observable<any> {
    const month = new Date().getMonth() + 1;
    return this.http.get(`${this.uri}/quantiteCarburant?month=${month}`);
  }
}
