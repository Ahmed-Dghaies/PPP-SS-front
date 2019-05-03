import { Component, OnInit } from '@angular/core';
import { Carburant } from 'app/shared/models/carburant';
import { MatDialogRef } from '@angular/material';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prix-carburant-add',
  templateUrl: './prix-carburant-add.component.html',
  styleUrls: ['./prix-carburant-add.component.css']
})
export class PrixCarburantAddComponent implements OnInit {

  public carburant: Carburant;

  constructor(
    private dialogRef: MatDialogRef<PrixCarburantAddComponent>,
    private carburantService: PrixCarburantService,
    private notifService: NotificationService) {
    this.carburant = new Carburant();
  }

  addCarburant() {
    this.carburant.identifiantPrix = 'P1';
    this.carburantService.updateIdentifiantPrix(this.carburant.carburant)
      .subscribe(
        res => {
          this.notifService.success('indentifiant prix on eté mis a jour avec succés');
        },
        err => console.log(err)
      );
    this.carburantService.addCarburant(this.carburant)
      .subscribe(
        res => {
          this.carburantService.getCarburantList();
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
  }

}
