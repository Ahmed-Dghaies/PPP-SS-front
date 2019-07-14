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

  public prixCarburant: PrixCarburant;

  constructor(
    private dialogRef: MatDialogRef<PrixCarburantAddComponent>,
    private prixcarburantService: PrixCarburantService,
    public carburantService: CarburantService,
    private notifService: NotificationService) {
    this.prixCarburant = new PrixCarburant();
  }

  addCarburant() {
    this.prixCarburant.identifiantPrix = 'P1';
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.prixCarburant.date = date;
    this.prixcarburantService.updateIdentifiantPrix(this.prixCarburant.carburant)
      .subscribe(
        res => {
          this.notifService.success('indentifiant prix on eté mis a jour avec succés');
        },
        err => console.log(err)
      );
    this.prixcarburantService.addCarburant(this.prixCarburant)
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
