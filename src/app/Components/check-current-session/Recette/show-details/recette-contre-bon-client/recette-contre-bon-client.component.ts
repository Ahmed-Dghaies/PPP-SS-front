import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ContreBonClientService } from 'app/shared/services/contre-bon-client.service';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteContreBonClientAddComponent } from './recette-contre-bon-client-add/recette-contre-bon-client-add.component';
import { SessionService } from 'app/shared/services/session.service';
import { ContreBonClient } from 'app/shared/models/contreBonClient';
import { RecetteContreBonClientEditComponent } from './recette-contre-bon-client-edit/recette-contre-bon-client-edit.component';
import { ContreBonService } from 'app/shared/services/contre-bon.service';

@Component({
  selector: 'app-recette-contre-bon-client',
  templateUrl: './recette-contre-bon-client.component.html',
  styleUrls: ['./recette-contre-bon-client.component.css']
})
export class RecetteContreBonClientComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public contreBonClientService: ContreBonClientService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['cardNumber', 'type', 'cardValue', 'date', 'actions'];
  }

  getTotalPrevue() {
    return this.contreBonClientService.getTotalPrevue();
  }

  ngOnInit() {
    this.contreBonClientService.getContreBonClientListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  addContreBonClientDialog(): void {
    this.dialog.open(RecetteContreBonClientAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteContreBonClientDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateContreBonClientDialog(contreBonClient: ContreBonClient): void {
    this.dialog.open(RecetteContreBonClientEditComponent, {
      panelClass: 'full-width-dialog',
      data: { contreBonClient: Object.assign({}, contreBonClient) }
    });
  }

  filter(): void {
    this.contreBonClientService.contreBonClientMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
