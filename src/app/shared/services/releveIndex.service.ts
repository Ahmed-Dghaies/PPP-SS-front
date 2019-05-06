import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IndexVM } from '../models/view_models/IndexVM.model';
import { HttpClient } from '@angular/common/http';
import { Index } from '../models/Index.model';
import { SessionService } from './session.service';
import { Session } from '../models/session.model';

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

  constructor(private http: HttpClient,
              private sessionService: SessionService) {
    this.releveIndexs = [];
    this.list = [];
    this.indexs = [];
    this.pompistes = [];
    this.releveIndexsMatTab = new MatTableDataSource(this.releveIndexs);
  }

  addReleveIndex(releveIndex) {
    return this.http.post<any>(`${this.uri}/addReleveIndex`, releveIndex);
  }

  getReleveIndexsList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<IndexVM[]>(`${this.uri}/listReleveIndex`).subscribe((data: IndexVM[]) => {
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
    const idSession = this.sessionService.sessions[0]._id;
    this.http.get(`${this.sessionUri}/get-session-pompiste/${idSession}`).subscribe(res => {
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
}
