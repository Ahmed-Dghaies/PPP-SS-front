import { Component, OnInit, ViewChild } from '@angular/core';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
import { CardTypeAddComponent } from './card-type-add/card-type-add.component';
import { ConfirmDeleteComponent } from '../../../Shared/confirm-delete/confirm-delete.component';
import { CardType } from 'app/shared/models/cardType.model';
import { CardTypeEditComponent } from './card-type-edit/card-type-edit.component';

@Component({
  selector: 'app-card-type-list',
  templateUrl: './card-type-list.component.html',
  styleUrls: ['./card-type-list.component.css']
})
export class CardTypeListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public cardTypeService: CarteBonTypeService,
              private dialog: MatDialog) {
    this.displayedColumns = ['cardCode', 'cardCarburant', 'numberOfLiters', 'cardDescription', 'actions'];
  }

  ngOnInit() {
    this.cardTypeService.getCardTypesList(this.sort, this.paginator);
  }

  addCardTypeDialog(): void {
    this.dialog.open(CardTypeAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteCardTypeDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateCardTypeDialog(cardType: CardType): void {
    this.dialog.open(CardTypeEditComponent, {
      panelClass: 'full-width-dialog',
      data: { cardType : Object.assign({}, cardType) }
    });
  }

  filter(): void {
    this.cardTypeService.cardTypesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
