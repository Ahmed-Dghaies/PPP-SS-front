import { Injectable } from '@angular/core';
import { Index } from '../models/Index.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public indexs: Index[];
  public indexsMatTab: MatTableDataSource<any>;


  private uri = 'http://localhost:5000/index';

  constructor(private http: HttpClient) {
    this.indexs = [];
    this.indexsMatTab = new MatTableDataSource(this.indexs);
  }

  addIndex(index) {
    return this.http.post<any>(`${this.uri}/add`, index);
  }

  getIndexList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Index[]>(`${this.uri}/list`).subscribe((data: Index[]) => {
      this.indexs = data;
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
}
