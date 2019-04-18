import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CardType } from '../../../../shared/models/cardType.model';
import { CarteBonTypeService } from '../../../../shared/services/carte-bon-type.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CardTypeAddComponent } from '../card-type-add/card-type-add.component';
import { CardTypeEditComponent } from '../card-type-edit/card-type-edit.component';
import { NotificationService } from '../../../../shared/services/notification.service'


@Component({
  selector: 'app-card-type-get',
  templateUrl: './card-type-get.component.html',
  styleUrls: ['./card-type-get.component.css']
})
export class CardTypeGetComponent implements OnInit {

  cardTypes: CardType[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['cardCode', 'cardDescription', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  searchKey: string;

  constructor(
    private _cardTypeService: CarteBonTypeService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  getCardTypes() {
    return this._cardTypeService.getCardTypes();
  }

  onDelete(cardType) {
    this.deleteCardType(cardType._id);
  }

  deleteCardType(id) {
    this._cardTypeService.deleteBusiness(id).subscribe(res => {
      this.notificationService.warn(':: Deleted');
      this.ngOnInit();
    },
      err => console.log(err))
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    this.dialog.open(CardTypeAddComponent, { panelClass: 'full-width-dialog' })
      .afterClosed()
      .subscribe(result => {
        this.notificationService.success(':: Success');
    });
    this.refresh();
  }

  refresh() {
    this.getCardTypes().subscribe((data: { cardCode: '', cardDescription: '' }[]) => {
      this.cardTypes = data;
      this.listData = new MatTableDataSource(this.cardTypes);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    this.dialog.open(CardTypeEditComponent, {
      panelClass: 'full-width-dialog',
      data: {
        dataKey: row
      }
    });
  }

  ngOnInit() {
    this.refresh();
  }

}
