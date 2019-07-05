import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { PrixCarburantAddComponent } from './prix-carburant-add/prix-carburant-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { PrixCarburant } from 'app/shared/models/prixcarburant';
import { PrixCarburantEditComponent } from './prix-carburant-edit/prix-carburant-edit.component';
import { CarburantService } from 'app/shared/services/carburant.service';

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
    public prixcarburantService: PrixCarburantService,
    private carburantService: CarburantService,
    private dialog: MatDialog) {
    this.displayedColumns = ['carburant', 'prix', 'identifiantPrix', 'date', 'actions'];
  }

  ngOnInit() {
    this.prixcarburantService.getCarburantList(this.sort, this.paginator);
  }

  updateCarburantDialog(carburant: PrixCarburant): void {
    let ref: string;
    ref = carburant.carburant;
    this.carburantService.getByRef(ref).subscribe(res => {
      carburant.carburant = res._id;
      this.dialog.open(PrixCarburantEditComponent, {
        panelClass: 'full-width-dialog',
        data: { carburant : Object.assign({}, carburant) }
      });
      carburant.carburant = ref;
    });
  }

  addCarburantDialog(): void {
    this.dialog.open(PrixCarburantAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deletePrixCarburantDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }


  filter(): void {
    this.prixcarburantService.carburantsMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
