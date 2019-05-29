import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';
import { ReleveIndexAddComponent } from './releveIndex-add/releveIndex-add.component';
import { ConfirmDeleteComponent } from 'app/Components/Shared/confirm-delete/confirm-delete.component';
import { ReleveIndexEditComponent } from './releveIndex-edit/releveIndex-edit.component';
import { ReleveIndex } from 'app/shared/models/ReleveIndex.model';

@Component({
  selector: 'app-releve-index-list',
  templateUrl: './releveIndex-list.component.html',
  styleUrls: ['./releveIndex-list.component.css']
})
export class ReleveIndexListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    public releveIndexService: ReleveIndexService,
    private dialog: MatDialog) {
    this.getScreenSize();
  }


  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          if (this.screenWidth < 650) {
            this.displayedColumns = ['reference', 'quantite', 'prevue', 'Pompiste', 'actions'];
          } else {
            this.displayedColumns = ['reference', 'depart', 'arrive', 'quantite', 'prix', 'Pompiste', 'prevue', 'actions'];
          }
    }

  ngOnInit() {
    this.releveIndexService.getReleveIndexsList(this.sort, this.paginator);
  }

  addReleveIndexDialog(): void {
    this.dialog.open(ReleveIndexAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  getTotalPrevue() {
    return this.releveIndexService.releveIndexs.map(t => t.prevue).reduce((acc, value) => acc + value, 0);
  }

  deleteReleveIndexDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateReleveIndexDialog(index: ReleveIndex): void {
    this.dialog.open(ReleveIndexEditComponent, {
      panelClass: 'full-width-dialog',
      data: { index : Object.assign({}, index) }
    });
  }

  filter(): void {
    this.releveIndexService.releveIndexsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
