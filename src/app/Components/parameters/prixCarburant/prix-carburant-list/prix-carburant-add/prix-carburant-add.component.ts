import { Component, OnInit } from '@angular/core';
import { PrixCarburant } from 'app/shared/models/prixcarburant';
import { MatDialogRef } from '@angular/material';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { CarburantService } from 'app/shared/services/carburant.service';

@Component({
  selector: 'app-prix-carburant-add',
  templateUrl: './prix-carburant-add.component.html',
  styleUrls: ['./prix-carburant-add.component.css']
})
export class PrixCarburantAddComponent implements OnInit {

  public carburant: PrixCarburant;

  constructor(
    private dialogRef: MatDialogRef<PrixCarburantAddComponent>,
    private prixcarburantService: PrixCarburantService,
    private carburantService: CarburantService,
    private notifService: NotificationService) {
    this.carburant = new PrixCarburant();
  }

  addCarburant() {
    this.carburant.identifiantPrix = 'P1';
    this.prixcarburantService.updateIdentifiantPrix(this.carburant.carburant)
      .subscribe(
        res => {
          this.notifService.success('indentifiant prix on eté mis a jour avec succés');
        },
        err => console.log(err)
      );
    this.prixcarburantService.addCarburant(this.carburant)
      .subscribe(
        res => {
          this.prixcarburantService.getCarburantList();
          this.dialogRef.close();
          this.notifService.success('Carburant ajouter avec succés');
        },
        err => console.log(err)
      );
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
    this.carburantService.getCarburantsList();
  }

}
