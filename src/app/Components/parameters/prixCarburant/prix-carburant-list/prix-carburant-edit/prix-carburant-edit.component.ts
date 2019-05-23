import { Component, OnInit, Inject } from '@angular/core';
import { PrixCarburant } from 'app/shared/models/prixcarburant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { CarburantService } from 'app/shared/services/carburant.service';

@Component({
  selector: 'app-prix-carburant-edit',
  templateUrl: './prix-carburant-edit.component.html',
  styleUrls: ['./prix-carburant-edit.component.css']
})
export class PrixCarburantEditComponent implements OnInit {

  public carburant: PrixCarburant;

  constructor(
    public dialogRef: MatDialogRef<PrixCarburantEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private prixcarburantService: PrixCarburantService,
    private carburantService: CarburantService,
    private notifservice: NotificationService) {
    this.carburant = data.carburant;
  }

  updateCarburant(): void {
    this.prixcarburantService.updateCarburant(this.carburant._id, this.carburant)
      .subscribe(res => {
        this.prixcarburantService.getCarburantList();
        this.dialogRef.close();
        this.notifservice.success('Prix carburant modifié avec succés');
      },
        err => {
          console.log(err);
        });
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
