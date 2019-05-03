import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IndexVM } from '../models/view_models/IndexVM.model';
import { HttpClient } from '@angular/common/http';
import { Index } from '../models/Index.model';

@Injectable({
  providedIn: 'root'
})
export class ReleveIndexService {

  public releveIndexs: IndexVM[];
  public releveIndexsMatTab: MatTableDataSource<any>;
  public list: string[];
  public indexs: Index[];

  private uri = 'https://ppp-ss.herokuapp.com/recette';
  private indexUri = 'https://ppp-ss.herokuapp.com/index';

  constructor(private http: HttpClient) {
    this.releveIndexs = [];
    this.list = [];
    this.indexs = [];
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
