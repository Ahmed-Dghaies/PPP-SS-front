import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog } from '@angular/material';
import { EspeceService } from 'app/shared/services/espece.service';
import { SessionService } from 'app/shared/services/session.service';
import { RecetteEspeceAddComponent } from './recette-espece-add/recette-espece-add.component';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { RecetteEspeceEditComponent } from './recette-espece-edit/recette-espece-edit.component';
import { Espece } from 'app/shared/models/espece';

@Component({
  selector: 'app-recette-espece',
  templateUrl: './recette-espece.component.html',
  styleUrls: ['./recette-espece.component.css']
})
export class RecetteEspeceComponent implements OnInit {

  public displayedColumns: string[];
  public search: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public especeService: EspeceService,
              private dialog: MatDialog,
              private sessionService: SessionService) {
    this.displayedColumns = ['type', 'quantity', 'totalValue', 'actions'];
  }

  ngOnInit() {
    this.especeService.getEspecesListById(this.sessionService.currentSessionId, this.sort, this.paginator);
  }

  getTotalPrevue() {
    return this.especeService.getTotalPrevue();
  }

  addEspeceDialog(): void {
    this.dialog.open(RecetteEspeceAddComponent, {
      panelClass: 'full-width-dialog'
    });
  }

  deleteEspeceDialog(id: string, msg: string): void {
    this.dialog.open(ConfirmDeleteComponent, {
      data: { id, msg }
    });
  }

  updateEspeceDialog(espece: Espece): void {
    this.dialog.open(RecetteEspeceEditComponent, {
      panelClass: 'full-width-dialog',
      data: { espece: Object.assign({}, espece) }
    });
  }

  filter(): void {
    this.especeService.especesMatTab.filter = this.search.trim().toLowerCase();
  }

  clearSearch(): void {
    this.search = '';
    this.filter();
  }

}
