import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { CarburantService } from 'app/shared/services/carburant.service';
import { AddCarburantComponent } from './add-carburant/add-carburant.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { Carburant } from 'app/shared/models/carburant';
import { UpdateCarburantComponent } from './update-carburant/update-carburant.component';
import { PrixCarburantListComponent } from '@ComCarburant/prix-carburant-list.component';
import { CiterneListComponent } from '@ComCiterne/citerne-list.component';

@Component({
  providers: [PrixCarburantListComponent, CiterneListComponent],
  selector: 'app-carburant',
  templateUrl: './carburant.component.html',
  styleUrls: ['./carburant.component.css']
})
export class CarburantComponent implements OnInit {
  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public carburantService: CarburantService,
              private dialog: MatDialog,
              private citernecomp: CiterneListComponent,
              private carburantcomp: PrixCarburantListComponent ) {
    this.displayedColumns = ['carburant', 'description', 'actions'];
   }

  ngOnInit() {
    this.carburantService.getCarburantsList(this.sort, this.paginator);
  }

  addCarburantDialog(): void {
    this.dialog.open(AddCarburantComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteCarburantDialog(id: string, msg: string): void {
    this.dialog.afterAllClosed.subscribe(() => {
      this.citernecomp.ngOnInit();
      this.carburantcomp.ngOnInit();
    });
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateCarburantDialog(carburant: Carburant): void {
    this.dialog.afterAllClosed.subscribe(() => {
      this.citernecomp.ngOnInit();
      this.carburantcomp.ngOnInit();
    });
    this.dialog.open(UpdateCarburantComponent, {
      panelClass: 'full-width-dialog',
      data: { carburant: Object.assign({}, carburant) }
    });
  }

  filter(): void {
    this.carburantService.carburantsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
