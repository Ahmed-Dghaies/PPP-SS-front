import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { RecetteBonValeurAddComponent } from './recette-bon-valeur-add/recette-bon-valeur-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { BonValeur } from 'app/shared/models/bonValeur.model';
import { RecetteBonValeurEditComponent } from './recette-bon-valeur-edit/recette-bon-valeur-edit.component';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-bon-valeur',
  templateUrl: './recette-bon-valeur.component.html',
  styleUrls: ['./recette-bon-valeur.component.css']
})
export class RecetteBonValeurComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public bonValeurService: BonValeurService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['cardValue', 'numberOfCards', 'date', 'totalValue', 'actions'];
  }

  ngOnInit() {
    this.bonValeurService.getBonValeursListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.bonValeurService.getTotalPrevue();
  }

  addBonValeurDialog(): void {
    this.dialog.open(RecetteBonValeurAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteBonValeurDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateBonValeurDialog(bonValeur: BonValeur): void {
    this.dialog.open(RecetteBonValeurEditComponent, {
      panelClass: 'full-width-dialog',
      data: { bonValeur: Object.assign({}, bonValeur) }
    });
  }

  filter(): void {
    this.bonValeurService.bonValeursMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
