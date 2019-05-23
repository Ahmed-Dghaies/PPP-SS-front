import { Component, OnInit, Inject } from '@angular/core';
import { Carburant } from 'app/shared/models/carburant';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarburantService } from 'app/shared/services/carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-carburant',
  templateUrl: './update-carburant.component.html',
  styleUrls: ['./update-carburant.component.css']
})
export class UpdateCarburantComponent implements OnInit {

  public carburant: Carburant;
  public width: number;
  constructor(
    public dialogRef: MatDialogRef<UpdateCarburantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carburantService: CarburantService,
    private notifservice: NotificationService) {
    this.carburant = data.carburant;
    this.width = 2;
   }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateCarburant(): void {
    this.carburantService.updateCarburant(this.carburant._id, this.carburant).subscribe(res => {
      this.carburantService.getCarburantsList();
      this.dialogRef.close();
      this.notifservice.success('Carburant modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
