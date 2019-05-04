import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { PrixCarburantAddComponent } from './prix-carburant-add/prix-carburant-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { Carburant } from 'app/shared/models/carburant';
import { PrixCarburantEditComponent } from './prix-carburant-edit/prix-carburant-edit.component';

@Component({
  selector: 'app-prix-carburant-list',
  templateUrl: './prix-carburant-list.component.html',
  styleUrls: ['./prix-carburant-list.component.css']
})
export class PrixCarburantListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public carburantService: PrixCarburantService,
    private dialog: MatDialog) {
    this.displayedColumns = ['carburant', 'prix', 'identifiantPrix', 'actions'];
  }

  ngOnInit() {
    this.carburantService.getCarburantList(this.sort, this.paginator);
  }

  updateCarburantDialog(carburant: Carburant): void {
    this.dialog.open(PrixCarburantEditComponent, {
      panelClass: 'full-width-dialog',
      data: { carburant : Object.assign({}, carburant) }
    });
  }

  addCarburantDialog(): void {
    this.dialog.open(PrixCarburantAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteCarburantDialog(id: string, msg: string): void {

    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
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
