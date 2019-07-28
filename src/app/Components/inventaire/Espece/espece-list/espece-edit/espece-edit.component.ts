import { Component, OnInit, Inject } from '@angular/core';
import { Espece } from 'app/shared/models/espece';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EspeceService } from 'app/shared/services/espece.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { SessionService } from 'app/shared/services/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espece-edit',
  templateUrl: './espece-edit.component.html',
  styleUrls: ['./espece-edit.component.css']
})
export class EspeceEditComponent implements OnInit {

  public espece: Espece;
  public width: number;

  constructor(public dialogRef: MatDialogRef<EspeceEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private especeService: EspeceService,
              private notifservice: NotificationService) {
    this.espece = data.espece;
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

  updateEspece(): void {
    this.espece.totalValue = this.espece.type * this.espece.quantity;
    this.especeService.updateEspece(this.espece._id, this.espece).subscribe(res => {
      this.especeService.getEspecesList();
      this.dialogRef.close();
      this.notifservice.success('Recette espece modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
