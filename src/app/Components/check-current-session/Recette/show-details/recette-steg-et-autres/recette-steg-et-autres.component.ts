import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { RecetteStegEtAutresAddComponent } from './recette-steg-et-autres-add/recette-steg-et-autres-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { RecetteStegEtAutresEditComponent } from './recette-steg-et-autres-edit/recette-steg-et-autres-edit.component';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { RecetteStegEtAutresMoreDetailsComponent } from '@ComSEAMD';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-steg-et-autres',
  templateUrl: './recette-steg-et-autres.component.html',
  styleUrls: ['./recette-steg-et-autres.component.css']
})
export class RecetteStegEtAutresComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public stegEtAutreService: StegEtAutresService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['clientName', 'carburant', 'numberOfCards', 'totalValue', 'actions'];
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns = ['clientName', 'carburant', 'totalValue', 'actions'];
    } else {
      this.displayedColumns = ['clientName', 'carburant', 'numberOfCards', 'totalValue', 'actions'];
    }
  }

  getTotalPrevue() {
    return this.stegEtAutreService.getTotalPrevue();
  }

  ngOnInit() {
    this.stegEtAutreService.getStegEtAutresListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  addStegEtAutreDialog(): void {
    this.dialog.open(RecetteStegEtAutresAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteStegEtAutreDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  seeMoreDialog(stegEtAutre): void {
    this.dialog.open(RecetteStegEtAutresMoreDetailsComponent, {
      panelClass: 'full-width-dialog',
      data: { stegEtAutre }
    });

  }

  updateStegEtAutreDialog(stegEtAutre: StegEtAutre): void {
    this.dialog.open(RecetteStegEtAutresEditComponent, {
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
