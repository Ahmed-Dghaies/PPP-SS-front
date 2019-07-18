import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { CardBonMoreDetailsComponent } from '@ComCarteBon/card-bon-more-details/card-bon-more-details.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { CardBonEditComponent } from './card-bon-edit/card-bon-edit.component';
import { CarteBon } from 'app/shared/models/carteBon.model';

@Component({
  selector: 'app-card-bon-list',
  templateUrl: './card-bon-list.component.html',
  styleUrls: ['./card-bon-list.component.css']
})
export class CardBonListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public carteBonService: CarteBonService,
              private dialog: MatDialog) {
    this.displayedColumns = ['cardType', 'cardValue', 'numberOfCards', 'state', 'totalValue', 'actions'];
  }

  ngOnInit() {
    this.carteBonService.getCarteBonsList(this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.carteBonService.getTotalPrevue();
  }

  seeMoreDialog(carteBon): void {
    this.dialog.open(CardBonMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { carteBon }
    });

  }

  deleteCarteBonDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateCarteBonDialog(carteBon: CarteBon): void {
    this.dialog.open(CardBonEditComponent, {
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
