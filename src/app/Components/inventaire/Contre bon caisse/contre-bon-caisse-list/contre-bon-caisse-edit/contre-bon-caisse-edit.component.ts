import { Component, OnInit, Inject } from '@angular/core';
import { ContreBonCaisse } from 'app/shared/models/contreBonCaisse';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContreBonCaisseService } from 'app/shared/services/contre-bon-caisse.service';
import { ContreBonService } from 'app/shared/services/contre-bon.service';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contre-bon-caisse-edit',
  templateUrl: './contre-bon-caisse-edit.component.html',
  styleUrls: ['./contre-bon-caisse-edit.component.css']
})
export class ContreBonCaisseEditComponent implements OnInit {

  public contreBonCaisse: ContreBonCaisse;
  public width: number;
  public error: boolean;
  public errorMessage: string;

  constructor(public dialogRef: MatDialogRef<ContreBonCaisseEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private contreBonCaisseService: ContreBonCaisseService,
              private notifservice: NotificationService,
              private sessionService: SessionService,
              public contreBonService: ContreBonService) {
    this.contreBonCaisse = data.contreBonCaisse;
    this.width = 2;
    this.error = false;
    this.errorMessage = '';
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

  updateContreBonCaisse(): void {
    this.contreBonCaisseService.updateContreBonCaisse(this.contreBonCaisse._id, this.contreBonCaisse).subscribe(res => {
      this.contreBonCaisseService.getContreBonCaisseListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifservice.success('Contre Bon Caisse modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
