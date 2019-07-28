import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { SubventionPecheService } from 'app/shared/services/subvention-peche.service';
import { SessionService } from 'app/shared/services/session.service';
import { RecetteSubventionPecheMoreDetailsComponent } from '@ComRecetteSubPMD/recette-subvention-peche-more-details.component';
import { RecetteSubventionPecheAddComponent } from './recette-subvention-peche-add/recette-subvention-peche-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteSubventionPecheEditComponent } from './recette-subvention-peche-edit/recette-subvention-peche-edit.component';
import { SubventionPeche } from 'app/shared/models/subventionPeche';

@Component({
  selector: 'app-recette-subvention-peche',
  templateUrl: './recette-subvention-peche.component.html',
  styleUrls: ['./recette-subvention-peche.component.css']
})
export class RecetteSubventionPecheComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public subventionPecheService: SubventionPecheService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['cardNumber', 'payeeName', 'cardValue', 'date', 'actions'];
  }

  ngOnInit() {
    this.subventionPecheService.getSubventionPechesListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.subventionPecheService.getTotalPrevue();
  }

  seeMoreDialog(subventionPeche): void {
    this.dialog.open(RecetteSubventionPecheMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { subventionPeche }
    });

  }

  addSubventionPecheDialog(): void {
    this.dialog.open(RecetteSubventionPecheAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteSubventionPecheDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateSubventionPecheDialog(subventionPeche: SubventionPeche): void {
    this.dialog.open(RecetteSubventionPecheEditComponent, {
      panelClass: 'full-width-dialog',
      data: { subventionPeche: Object.assign({}, subventionPeche) }
    });
  }

  filter(): void {
    this.subventionPecheService.subventionPechesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
