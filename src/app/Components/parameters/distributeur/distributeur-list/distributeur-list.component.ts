import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DistributeurService } from 'app/shared/services/distributeur.service';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { DistributeurAddComponent } from './distributeur-add/distributeur-add.component';
import { ConfirmDeleteComponent } from 'app/Components/Shared/confirm-delete/confirm-delete.component';
import { Distributeur } from 'app/shared/models/distributeur.model';
import { DistributeurEditComponent } from './distributeur-edit/distributeur-edit.component';
import { IndexListComponent } from '@ComIndex/index-list.component';

@Component({
  providers: [IndexListComponent],
  selector: 'app-distributeur-list',
  templateUrl: './distributeur-list.component.html',
  styleUrls: ['./distributeur-list.component.css']
})
export class DistributeurListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public distributeurService: DistributeurService,
    private dialog: MatDialog,
    private comp: IndexListComponent) {
    this.getScreenSize();
    }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns =  ['reference', 'libelle', 'actions'];
    } else {
      this.displayedColumns =  ['reference', 'libelle', 'numImmatriculation', 'anneeFabrication', 'actions'];
    }
  }

  ngOnInit() {
    this.distributeurService.getDistributeursList(this.sort, this.paginator);
  }

  addDistributeurDialog(): void {
    this.dialog.afterAllClosed.subscribe(() => {
      this.comp.ngOnInit();
    });
    this.dialog.open(DistributeurAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteDistributeurDialog(id: string, msg: string): void {

    this.dialog.afterAllClosed.subscribe(() => {
      this.comp.ngOnInit();
    });
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateDistributeurDialog(distributeur: Distributeur): void {
    this.dialog.open(DistributeurEditComponent, {
      panelClass: 'full-width-dialog',
      data: { distributeur: Object.assign({}, distributeur) }
    });
  }

  filter(): void {
    this.distributeurService.distributeursMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
