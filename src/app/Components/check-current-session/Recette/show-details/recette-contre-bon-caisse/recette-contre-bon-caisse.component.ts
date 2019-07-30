import { Component, OnInit, ViewChild } from '@angular/core';
import { ContreBonCaisseService } from 'app/shared/services/contre-bon-caisse.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { RecetteContreBonCaisseAddComponent } from './recette-contre-bon-caisse-add/recette-contre-bon-caisse-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteContreBonCaisseEditComponent } from './recette-contre-bon-caisse-edit/recette-contre-bon-caisse-edit.component';
import { ContreBonCaisse } from 'app/shared/models/contreBonCaisse';

@Component({
  selector: 'app-recette-contre-bon-caisse',
  templateUrl: './recette-contre-bon-caisse.component.html',
  styleUrls: ['./recette-contre-bon-caisse.component.css']
})
export class RecetteContreBonCaisseComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public contreBonCaisseService: ContreBonCaisseService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['cardNumber', 'type', 'cardValue', 'date', 'actions'];
  }

  getTotalPrevue() {
    return this.contreBonCaisseService.getTotalPrevue();
  }

  ngOnInit() {
    this.contreBonCaisseService.getContreBonCaisseListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  addContreBonCaisseDialog(): void {
    this.dialog.open(RecetteContreBonCaisseAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteContreBonCaisseDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateContreBonCaisseDialog(contreBonCaisse: ContreBonCaisse): void {
    this.dialog.open(RecetteContreBonCaisseEditComponent, {
      panelClass: 'full-width-dialog',
      data: { contreBonCaisse: Object.assign({}, contreBonCaisse) }
    });
  }


  filter(): void {
    this.contreBonCaisseService.contreBonCaisseMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
