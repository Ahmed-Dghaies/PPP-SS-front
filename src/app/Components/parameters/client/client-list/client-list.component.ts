import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'app/shared/services/client.service';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ConfirmDeleteComponent } from '../../../Shared/confirm-delete/confirm-delete.component';
import { Client } from 'app/shared/models/client.model';
import { UpdateClientComponent } from './update-client/update-client.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public clientService: ClientService, private dialog: MatDialog) {
    this.displayedColumns = ['number', 'name', 'matFisc', 'state', 'actions'];
  }

  ngOnInit() {
    this.clientService.getClientsList(this.sort, this.paginator);
  }

  seeMoreDialog(client): void {
    this.dialog.open(MoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      data: { client }
    });

  }

  addClientDialog(): void {
    this.dialog.open(AddClientComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteClientDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateClientDialog(client: Client): void {
    this.dialog.open(UpdateClientComponent, {
      panelClass: 'full-width-dialog',
      data: { client: Object.assign({}, client) }
    });
  }

  filter(): void {
    this.clientService.clientsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
