import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteBonValeurAddComponent } from '../recette-bon-valeur/recette-bon-valeur-add/recette-bon-valeur-add.component';
import { RecetteCarteBonAddComponent } from './recette-carte-bon-add/recette-carte-bon-add.component';
import { RecetteCarteBonEditComponent } from './recette-carte-bon-edit/recette-carte-bon-edit.component';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { RecetteCarteBonMoreDetailsComponent } from './recette-carte-bon-more-details/recette-carte-bon-more-details.component';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-carte-bon',
  templateUrl: './recette-carte-bon.component.html',
  styleUrls: ['./recette-carte-bon.component.css']
})
export class RecetteCarteBonComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public carteBonService: CarteBonService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['cardType', 'cardValue', 'numberOfCards', 'totalValue', 'actions'];
  }

  ngOnInit() {
    this.carteBonService.getCarteBonsListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.carteBonService.getTotalPrevue();
  }

  seeMoreDialog(carteBon): void {
    this.dialog.open(RecetteCarteBonMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { carteBon }
    });

  }

  addCarteBonDialog(): void {
    this.dialog.open(RecetteCarteBonAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteCarteBonDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateCarteBonDialog(carteBon: CarteBon): void {
    this.dialog.open(RecetteCarteBonEditComponent, {
      panelClass: 'full-width-dialog',
      data: { carteBon: Object.assign({}, carteBon) }
    });
  }

  filter(): void {
    this.carteBonService.carteBonsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }
}
