import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { IndexService } from 'src/app/shared/services/index.service';
import { IndexAddComponent } from './index-add/index-add.component';
import { ConfirmDeleteComponent } from 'src/app/Components/Shared/confirm-delete/confirm-delete.component';
import { Index } from 'src/app/shared/models/Index.model';
import { IndexEditComponent } from './index-edit/index-edit.component';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})
export class IndexListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public indexService: IndexService,
              private dialog: MatDialog) {
    this.displayedColumns = ['reference', 'valeurIndex', 'dernierDate', 'carburant', 'citerne', 'distributeur', 'actions'];
  }

  ngOnInit() {
    this.indexService.getIndexList(this.sort, this.paginator);
  }

  addIndexDialog(): void {
    this.dialog.open(IndexAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteIndexDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateIndexDialog(index: Index): void {
    this.dialog.open(IndexEditComponent, {
      panelClass: 'full-width-dialog',
      data: { index : Object.assign({}, index) }
    });
  }

  filter(): void {
    this.indexService.indexsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }
}
