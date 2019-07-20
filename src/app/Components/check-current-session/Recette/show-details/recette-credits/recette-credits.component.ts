import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { PayementCreditService } from 'app/shared/services/payement-credit.service';
import { RecetteCreditsAddComponent } from './recette-credits-add/recette-credits-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteCreditsEditComponent } from './recette-credits-edit/recette-credits-edit.component';
import { PayementCredit } from 'app/shared/models/payementCredit.model';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-credits',
  templateUrl: './recette-credits.component.html',
  styleUrls: ['./recette-credits.component.css']
})
export class RecetteCreditsComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public payementCreditService: PayementCreditService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['clientNumber', 'clientName', 'payementValue', 'date', 'actions'];
  }

  getTotalPrevue() {
    return this.payementCreditService.getTotalPrevue();
  }

  ngOnInit() {
    this.payementCreditService.getPayementCreditsList(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  addPayementCreditDialog(): void {
    this.dialog.open(RecetteCreditsAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deletePayementCreditDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updatePayementCreditDialog(payementCredit: PayementCredit): void {
    this.dialog.open(RecetteCreditsEditComponent, {
      panelClass: 'full-width-dialog',
      data: { payementCredit: Object.assign({}, payementCredit) }
    });
  }

  filter(): void {
    this.payementCreditService.payementCreditsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
