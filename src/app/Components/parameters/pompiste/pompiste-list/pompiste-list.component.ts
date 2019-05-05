import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { PompisteService } from 'app/shared/services/pompiste.service';
import { AddPompisteComponent } from './add-pompiste/add-pompiste.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { Pompiste } from 'app/shared/models/pompiste.model';
import { UpdatePompisteComponent } from './update-pompiste/update-pompiste.component';

@Component({
  selector: 'app-pompiste-list',
  templateUrl: './pompiste-list.component.html',
  styleUrls: ['./pompiste-list.component.css']
})
export class PompisteListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public pompisteService: PompisteService, private dialog: MatDialog) {
    this.displayedColumns = ['name', 'email', 'phone', 'actions'];
  }

  ngOnInit() {
    this.pompisteService.getpompistesList(this.sort, this.paginator);
  }


  addPompisteDialog(): void {
    this.dialog.open(AddPompisteComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deletePompisteDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updatePompisteDialog(pompiste: Pompiste): void {
    this.dialog.open(UpdatePompisteComponent, {
      panelClass: 'full-width-dialog',
      data: { pompiste: Object.assign({}, pompiste) }
    });
  }

  filter(): void {
    this.pompisteService.pompistesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }


}
