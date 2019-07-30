import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ContreBonService } from 'app/shared/services/contre-bon.service';
import { ContreBonAddComponent } from './contre-bon-add/contre-bon-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { ContreBonMoreDetailsComponent } from './contre-bon-more-details/contre-bon-more-details.component';

@Component({
  selector: 'app-contre-bon-list',
  templateUrl: './contre-bon-list.component.html',
  styleUrls: ['./contre-bon-list.component.css']
})
export class ContreBonListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public contreBonService: ContreBonService,
              private dialog: MatDialog) {
    this.displayedColumns = ['cardNumber', 'type', 'caisseState', 'clientState', 'date', 'actions'];
  }

  ngOnInit() {
    this.contreBonService.getContreBonsList(this.sort, this.paginator);
  }

  seeMoreDialog(contreBon): void {
    this.dialog.open(ContreBonMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      data: { contreBon }
    });

  }

  addContreBonDialog(): void {
    this.dialog.open(ContreBonAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteContreBonDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  filter(): void {
    this.contreBonService.contreBonsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
