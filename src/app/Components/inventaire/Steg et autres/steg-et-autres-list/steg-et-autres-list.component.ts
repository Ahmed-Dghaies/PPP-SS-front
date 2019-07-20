import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { StegEtAutresEditComponent } from './steg-et-autres-edit/steg-et-autres-edit.component';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { StegEtAutresMoreDetailsComponent } from './steg-et-autres-more-details/steg-et-autres-more-details.component';

@Component({
  selector: 'app-steg-et-autres-list',
  templateUrl: './steg-et-autres-list.component.html',
  styleUrls: ['./steg-et-autres-list.component.css']
})
export class StegEtAutresListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public stegEtAutreService: StegEtAutresService,
              private dialog: MatDialog) {
    this.displayedColumns = ['clientNumber', 'clientName', 'carburant', 'numberOfCards', 'totalValue', 'actions'];
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns = ['clientName', 'carburant', 'totalValue', 'actions'];
    } else {
      this.displayedColumns = ['clientNumber', 'clientName', 'carburant', 'numberOfCards', 'totalValue', 'actions'];
    }
  }

  getTotalPrevue() {
    return this.stegEtAutreService.getTotalPrevue();
  }

  ngOnInit() {
    this.stegEtAutreService.getStegEtAutresList(this.sort, this.paginator);
  }

  deleteStegEtAutreDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  seeMoreDialog(carteBon): void {
    this.dialog.open(StegEtAutresMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { carteBon }
    });

  }

  updateStegEtAutreDialog(stegEtAutre: StegEtAutre): void {
    this.dialog.open(StegEtAutresEditComponent, {
      panelClass: 'full-width-dialog',
      data: { stegEtAutre: Object.assign({}, stegEtAutre) }
    });
  }

  filter(): void {
    this.stegEtAutreService.stegEtAutresMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }


}
