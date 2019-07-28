import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SubventionPecheMoreDetailsComponent } from './subvention-peche-more-details/subvention-peche-more-details.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { SubventionPecheService } from 'app/shared/services/subvention-peche.service';
import { SessionService } from 'app/shared/services/session.service';
import { SubventionPecheEditComponent } from './subvention-peche-edit/subvention-peche-edit.component';
import { SubventionPeche } from 'app/shared/models/subventionPeche';

@Component({
  selector: 'app-subvention-peche-list',
  templateUrl: './subvention-peche-list.component.html',
  styleUrls: ['./subvention-peche-list.component.css']
})
export class SubventionPecheListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public subventionPecheService: SubventionPecheService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['cardNumber', 'payeeName', 'cardValue', 'date', 'actions'];
  }

  ngOnInit() {
    this.subventionPecheService.getSubventionPechesListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.subventionPecheService.getTotalPrevue();
  }

  seeMoreDialog(subventionPeche): void {
    this.dialog.open(SubventionPecheMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { subventionPeche }
    });

  }

  deleteSubventionPecheDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateSubventionPecheDialog(subventionPeche: SubventionPeche): void {
    this.dialog.open(SubventionPecheEditComponent, {
      panelClass: 'full-width-dialog',
      data: { subventionPeche: Object.assign({}, subventionPeche) }
    });
  }

  filter(): void {
    this.subventionPecheService.subventionPechesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }
}
