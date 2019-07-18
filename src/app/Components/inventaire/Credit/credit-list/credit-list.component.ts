import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { CreditService } from 'app/shared/services/credit.service';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { CreditEditComponent } from './credit-edit/credit-edit.component';
import { Credit } from 'app/shared/models/Credit.model';
import { CreditAddComponent } from './credit-add/credit-add.component';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public creditService: CreditService,
              private dialog: MatDialog) {
    this.displayedColumns = ['clientNumber', 'clientName', 'date', 'creditOriginalValue', 'creditRestValue', 'actions'];
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns = ['clientName', 'date', 'creditRestValue', 'actions'];
    } else {
      this.displayedColumns = ['clientNumber', 'clientName', 'date', 'creditOriginalValue', 'creditRestValue', 'actions'];
    }
  }

  getTotalPrevue() {
    return this.creditService.getTotalPrevue();
  }

  ngOnInit() {
    this.creditService.getCreditsList(this.sort, this.paginator);
  }

  addCreditDialog(): void {
    this.dialog.open(CreditAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteCreditDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateCreditDialog(credit: Credit): void {
    this.dialog.open(CreditEditComponent, {
      panelClass: 'full-width-dialog',
      data: { credit: Object.assign({}, credit) }
    });
  }

  filter(): void {
    this.creditService.creditsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
