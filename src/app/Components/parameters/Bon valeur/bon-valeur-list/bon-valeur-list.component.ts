import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { BonValeurMoreDetailsComponent } from './bon-valeur-more-details/bon-valeur-more-details.component';
import { BonValeurAddComponent } from './bon-valeur-add/bon-valeur-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { BonValeur } from 'app/shared/models/bonValeur.model';
import { BonValeurEditComponent } from './bon-valeur-edit/bon-valeur-edit.component';

@Component({
  selector: 'app-bon-valeur-list',
  templateUrl: './bon-valeur-list.component.html',
  styleUrls: ['./bon-valeur-list.component.css']
})
export class BonValeurListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public bonValeurService: BonValeurService,
              private dialog: MatDialog) {
    this.displayedColumns = ['cardValue', 'numberOfCards', 'date', 'totalValue', 'actions'];
  }

  ngOnInit() {
    this.bonValeurService.getBonValeursList(this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.bonValeurService.getTotalPrevue();
  }

  addBonValeurDialog(): void {
    this.dialog.open(BonValeurAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteBonValeurDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateBonValeurDialog(bonValeur: BonValeur): void {
    this.dialog.open(BonValeurEditComponent, {
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
