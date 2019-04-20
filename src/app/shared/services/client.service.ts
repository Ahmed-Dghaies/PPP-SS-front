import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public clients: Client[];
  public clientsMatTab: MatTableDataSource<any>;

  private uri = 'https://ppp-ss.herokuapp.com/client';


  constructor(private http: HttpClient) {
    this.clients = [];
    this.clientsMatTab = new MatTableDataSource(this.clients);
  }

  // get clients list
  getClientsList(sort?: MatSort, paginator?: MatPaginator): void {
    this.http.get<Client[]>(`${this.uri}/list`).subscribe(res => {
      const key = 'clients';
      this.clients = res[key];
      this.clients = this.clients.reverse();
      this.clientsMatTab.data = this.clients;
      if (sort) {
        this.clientsMatTab.sort = sort;
      }
      if (paginator) {
        this.clientsMatTab.paginator = paginator;
      }


    },
      err => {
        console.log(err);
      });
  }

  // add new client
  addClient(client: Client): Observable<any> {
    const request = { client };
    return this.http.post(`${this.uri}/add`, request);
  }

  // delete Client
  deleteClient(id: string): Observable<any> {

    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  // update Client
  updateClient(id: string, client: Client): Observable<any> {
    const request = {
      client
    };

    return this.http.put(`${this.uri}/update/${id}`, request);
  }

}
