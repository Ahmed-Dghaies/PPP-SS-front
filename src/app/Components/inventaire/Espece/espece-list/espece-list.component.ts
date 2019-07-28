import { Component, OnInit, ViewChild } from '@angular/core';
import { Espece } from 'app/shared/models/espece';
import { EspeceEditComponent } from './espece-edit/espece-edit.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { SessionService } from 'app/shared/services/session.service';
import { EspeceService } from 'app/shared/services/espece.service';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-espece-list',
  templateUrl: './espece-list.component.html',
  styleUrls: ['./espece-list.component.css']
})
export class EspeceListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public especeService: EspeceService,
              private dialog: MatDialog) {
    this.displayedColumns = ['type', 'quantity', 'totalValue', 'state', 'actions'];
  }

  ngOnInit() {
    this.especeService.getEspecesList(this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.especeService.getTotalPrevue();
  }

  deleteEspeceDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateEspeceDialog(espece: Espece): void {
    this.dialog.open(EspeceEditComponent, {
      panelClass: 'full-width-dialog',
      data: { espece: Object.assign({}, espece) }
    });
  }

  filter(): void {
    this.especeService.especesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
