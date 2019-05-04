import { Component, OnInit, Inject } from '@angular/core';
import { Carburant } from 'app/shared/models/carburant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prix-carburant-edit',
  templateUrl: './prix-carburant-edit.component.html',
  styleUrls: ['./prix-carburant-edit.component.css']
})
export class PrixCarburantEditComponent implements OnInit {

  public carburant: Carburant;

  constructor(
    public dialogRef: MatDialogRef<PrixCarburantEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carburantService: PrixCarburantService,
    private notifservice: NotificationService) {
    this.carburant = data.carburant;
  }

  updateCarburant(): void {
    this.carburantService.updateCarburant(this.carburant._id, this.carburant)
      .subscribe(res => {
        this.carburantService.getCarburantList();
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
  }

}
