import { Component, OnInit, Inject } from '@angular/core';
import { ContreBonCaisse } from 'app/shared/models/contreBonCaisse';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContreBonCaisseService } from 'app/shared/services/contre-bon-caisse.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { SessionService } from 'app/shared/services/session.service';
import { NgForm } from '@angular/forms';
import { ContreBonService } from 'app/shared/services/contre-bon.service';

@Component({
  selector: 'app-recette-contre-bon-caisse-edit',
  templateUrl: './recette-contre-bon-caisse-edit.component.html',
  styleUrls: ['./recette-contre-bon-caisse-edit.component.css']
})
export class RecetteContreBonCaisseEditComponent implements OnInit {

  public contreBonCaisse: ContreBonCaisse;
  public width: number;

  constructor(public dialogRef: MatDialogRef<RecetteContreBonCaisseEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private contreBonCaisseService: ContreBonCaisseService,
              private notifservice: NotificationService,
              private sessionService: SessionService,
              public contreBonService: ContreBonService) {
    this.contreBonCaisse = data.contreBonCaisse;
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
