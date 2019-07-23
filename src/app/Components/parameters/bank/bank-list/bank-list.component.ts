import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { BankService } from 'app/shared/services/bank.service';
import { SessionService } from 'app/shared/services/session.service';
import { BankAddComponent } from './bank-add/bank-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { BankMoreDetailsComponent } from './bank-more-details/bank-more-details.component';
import { Bank } from 'app/shared/models/bank';
import { BankEditComponent } from './bank-edit/bank-edit.component';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public bankService: BankService,
              private dialog: MatDialog) {
    this.displayedColumns = ['bankName', 'bankCode', 'agencyName', 'agencyCode', 'actions'];
  }

  ngOnInit() {
    this.bankService.getBanksList(this.sort, this.paginator);
  }

  addBankDialog(): void {
    this.dialog.open(BankAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteBankDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  seeMoreDialog(bank): void {
    this.dialog.open(BankMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      data: { bank }
    });

  }

  updateBankDialog(bank: Bank): void {
    this.dialog.open(BankEditComponent, {
      panelClass: 'full-width-dialog',
      data: { bank: Object.assign({}, bank) }
    });
  }

  filter(): void {
    this.bankService.banksMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
