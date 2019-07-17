import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ChequeService } from 'app/shared/services/cheque.service';
import { MatDialog, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material';
import { ChequeAddComponent } from './cheque-add/cheque-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { Cheque } from 'app/shared/models/Cheque.model';
import { ChequeEditComponent } from './cheque-edit/cheque-edit.component';

@Component({
  selector: 'app-cheque-list',
  templateUrl: './cheque-list.component.html',
  styleUrls: ['./cheque-list.component.css']
})
export class ChequeListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public chequeService: ChequeService,
              private dialog: MatDialog) {
    this.displayedColumns = ['payeeName', 'chequeNumber', 'bankName', 'date', 'chequeValue', 'actions'];
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns = ['payeeName', 'bankName', 'chequeValue', 'actions'];
    } else {
      this.displayedColumns = ['payeeName', 'chequeNumber', 'bankName', 'date', 'chequeValue', 'actions'];
    }
  }

  getTotalPrevue() {
    return this.chequeService.getTotalPrevue();
  }

  ngOnInit() {
    this.chequeService.getChequesList(this.sort, this.paginator);
  }

  addChequeDialog(): void {
    this.dialog.open(ChequeAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteChequeDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateChequeDialog(cheque: Cheque): void {
    this.dialog.open(ChequeEditComponent, {
      panelClass: 'full-width-dialog',
      data: { cheque: Object.assign({}, cheque) }
    });
  }

  filter(): void {
    this.chequeService.chequesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
