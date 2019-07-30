import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { ContreBonCaisseService } from 'app/shared/services/contre-bon-caisse.service';
import { ContreBonCaisse } from 'app/shared/models/contreBonCaisse';
import { ContreBonCaisseEditComponent } from './contre-bon-caisse-edit/contre-bon-caisse-edit.component';

@Component({
  selector: 'app-contre-bon-caisse-list',
  templateUrl: './contre-bon-caisse-list.component.html',
  styleUrls: ['./contre-bon-caisse-list.component.css']
})
export class ContreBonCaisseListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public contreBonCaisseService: ContreBonCaisseService,
              private dialog: MatDialog) {
    this.displayedColumns = ['cardNumber', 'type', 'cardValue', 'date', 'actions'];
  }

  getTotalPrevue() {
    return this.contreBonCaisseService.getTotalPrevue();
  }

  ngOnInit() {
    this.contreBonCaisseService.getContreBonCaisseList(this.sort, this.paginator);
  }

  deleteContreBonCaisseDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateContreBonCaisseDialog(contreBonCaisse: ContreBonCaisse): void {
    this.dialog.open(ContreBonCaisseEditComponent, {
      panelClass: 'full-width-dialog',
      data: { contreBonCaisse: Object.assign({}, contreBonCaisse) }
    });
  }

  filter(): void {
    this.contreBonCaisseService.contreBonCaisseMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
