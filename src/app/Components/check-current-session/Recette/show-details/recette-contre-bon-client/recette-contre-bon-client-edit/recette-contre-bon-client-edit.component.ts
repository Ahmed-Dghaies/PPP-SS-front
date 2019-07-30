import { Component, OnInit, Inject } from '@angular/core';
import { ContreBonClient } from 'app/shared/models/contreBonClient';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContreBonClientService } from 'app/shared/services/contre-bon-client.service';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { ContreBonService } from 'app/shared/services/contre-bon.service';

@Component({
  selector: 'app-recette-contre-bon-client-edit',
  templateUrl: './recette-contre-bon-client-edit.component.html',
  styleUrls: ['./recette-contre-bon-client-edit.component.css']
})
export class RecetteContreBonClientEditComponent implements OnInit {

  public contreBonClient: ContreBonClient;
  public width: number;

  constructor(public dialogRef: MatDialogRef<RecetteContreBonClientEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private contreBonClientService: ContreBonClientService,
              private notifservice: NotificationService,
              private sessionService: SessionService,
              public contreBonService: ContreBonService) {
    this.contreBonClient = data.contreBonClient;
    this.width = 2;
  }

  ngOnInit() {
    this.contreBonService.getContreBonsList();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateContreBonClient(): void {
    this.contreBonClientService.updateContreBonClient(this.contreBonClient._id, this.contreBonClient).subscribe(res => {
      this.contreBonClientService.getContreBonClientListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifservice.success('Contre Bon Client modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
