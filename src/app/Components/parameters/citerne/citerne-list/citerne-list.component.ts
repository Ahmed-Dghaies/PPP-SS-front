import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
import { AddCiterneComponent } from './add-citerne/add-citerne.component';
import { ConfirmDeleteComponent } from '../../../Shared/confirm-delete/confirm-delete.component';
import { UpdateCiterneComponent } from './update-citerne/update-citerne.component';
import { Citerne } from 'app/shared/models/citerne.model';
import { CiterneService } from 'app/shared/services/citerne.service';
import { MoreCiterneDetailsComponent } from './more-citerne-details/more-citerne-details.component';
import { CarburantService } from 'app/shared/services/carburant.service';
import { IndexListComponent } from '@ComIndex/index-list.component';
import { IndexService } from 'app/shared/services/index.service';
import { Index } from 'app/shared/models/Index.model';

@Component({
  selector: 'app-citerne-list',
  templateUrl: './citerne-list.component.html',
  styleUrls: ['./citerne-list.component.css'],
  providers: [IndexListComponent]
})
export class CiterneListComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public citerneService: CiterneService,
              private dialog: MatDialog,
              private carburantService: CarburantService,
              private indexService: IndexService,
              private comp: IndexListComponent) {
    this.displayedColumns = ['code', 'libelle', 'carburant', 'capacite', 'actions'];
  }

  ngOnInit() {
    this.citerneService.getCiternesList(this.sort, this.paginator);
  }

  seeMoreDialog(citerne): void {
    this.dialog.open(MoreCiterneDetailsComponent, {
      panelClass: 'full-width-dialog',
      height: '500px',
      data: { citerne }
    });

  }

  addCiterneDialog(): void {
    this.dialog.open(AddCiterneComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteCiterneDialog(id: string, msg: string): void {
    this.dialog.afterAllClosed.subscribe(() => {
      this.comp.ngOnInit();
    });
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateCiterneDialog(citerne: Citerne): void {
    let ref: string;
    ref = citerne.carburant;
    this.carburantService.getByRef(ref).subscribe(res => {
      citerne.carburant = res._id;
      this.dialog.open(UpdateCiterneComponent, {
        panelClass: 'full-width-dialog',
        data: { citerne: Object.assign({}, citerne) }
      });
      citerne.carburant = ref;
    });
  }

  filter(): void {
    this.citerneService.citernesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }
}
