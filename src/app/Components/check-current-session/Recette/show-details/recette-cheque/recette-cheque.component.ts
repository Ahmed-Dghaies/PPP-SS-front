import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ChequeService } from 'app/shared/services/cheque.service';
import { RecetteChequeAddComponent } from './recette-cheque-add/recette-cheque-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteChequeEditComponent } from './recette-cheque-edit/recette-cheque-edit.component';
import { Cheque } from 'app/shared/models/Cheque.model';
import { SessionService } from 'app/shared/services/session.service';
import { RecetteChequeMoreDetailsComponent } from './recette-cheque-more-details/recette-cheque-more-details.component';

@Component({
  selector: 'app-recette-cheque',
  templateUrl: './recette-cheque.component.html',
  styleUrls: ['./recette-cheque.component.css']
})
export class RecetteChequeComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public chequeService: ChequeService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['payeeName', 'bankName', 'date', 'chequeValue', 'actions'];
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns = ['payeeName', 'bankName', 'chequeValue', 'actions'];
    } else {
      this.displayedColumns = ['payeeName', 'bankName', 'date', 'chequeValue', 'actions'];
    }
  }

  getTotalPrevue() {
    return this.chequeService.getTotalPrevue();
  }

  ngOnInit() {
    this.chequeService.getChequesListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  addChequeDialog(): void {
    this.dialog.open(RecetteChequeAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  seeMoreDialog(cheque): void {
    this.dialog.open(RecetteChequeMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { cheque }
    });

  }

  deleteChequeDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateChequeDialog(cheque: Cheque): void {
    this.dialog.open(RecetteChequeEditComponent, {
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
