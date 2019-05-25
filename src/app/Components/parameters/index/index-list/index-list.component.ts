import { Component, OnInit, ViewChild, HostListener, Injectable } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { IndexService } from 'app/shared/services/index.service';
import { IndexAddComponent } from './index-add/index-add.component';
import { ConfirmDeleteComponent } from 'app/Components/Shared/confirm-delete/confirm-delete.component';
import { Index } from 'app/shared/models/Index.model';
import { IndexEditComponent } from './index-edit/index-edit.component';
import { CiterneService } from 'app/shared/services/citerne.service';
import { DistributeurService } from 'app/shared/services/distributeur.service';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})

export class IndexListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public indexService: IndexService,
    private citerneService: CiterneService,
    private distributeurService: DistributeurService,
    private dialog: MatDialog) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns =  ['reference', 'valeurIndex', 'carburant', 'actions'];
    } else {
      this.displayedColumns =  ['reference', 'valeurIndex', 'dernierDate', 'carburant', 'citerne', 'distributeur', 'actions'];
    }
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
    let code: string;
    let dis: string;
    code = index.citerne;
    dis = index.distributeur;
    this.citerneService.getCiterneByCode(code).subscribe(res => {

      index.citerne = res._id;
      this.distributeurService.getByRef(dis).subscribe(d => {
        index.distributeur = d._id;
        this.dialog.open(IndexEditComponent, {
          panelClass: 'full-width-dialog',
          data: { index: Object.assign({}, index) }
        });
        index.citerne = code;
        index.distributeur = dis;
      });
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
