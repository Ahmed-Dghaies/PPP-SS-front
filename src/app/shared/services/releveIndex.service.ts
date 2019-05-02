import { Injectable } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IndexVM } from '../models/view_models/IndexVM.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReleveIndexService {

  public releveIndexs: IndexVM[];
  public releveIndexsMatTab: MatTableDataSource<any>;

  private uri = 'http://localhost:5000/recette';

  constructor(private http: HttpClient) {
    this.releveIndexs = [];
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
