import { Component, OnInit } from '@angular/core';
import { ContreBonCaisse } from 'app/shared/models/contreBonCaisse';
import { MatDialogRef } from '@angular/material';
import { ContreBonCaisseService } from 'app/shared/services/contre-bon-caisse.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { ContreBonService } from 'app/shared/services/contre-bon.service';

@Component({
  selector: 'app-recette-contre-bon-caisse-add',
  templateUrl: './recette-contre-bon-caisse-add.component.html',
  styleUrls: ['./recette-contre-bon-caisse-add.component.css']
})
export class RecetteContreBonCaisseAddComponent implements OnInit {

  public contreBonCaisse: ContreBonCaisse;
  public width: number;
  public error: boolean;
  public errorMessage: string;
  public prices: number[];


  constructor(private dialogMat: MatDialogRef<RecetteContreBonCaisseAddComponent>,
              private contreBonCaisseService: ContreBonCaisseService,
              private notifService: NotificationService,
              private sessionService: SessionService,
              public contreBonService: ContreBonService) {
    this.contreBonCaisse = new ContreBonCaisse();
    this.width = 2;
    this.prices = [];
  }

  ngOnInit() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.contreBonCaisse.date = date;
    this.contreBonService.getContreBonsList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addContreBonCaisse(): void {
    this.contreBonCaisse.sessionId = this.sessionService.currentSessionId;
    this.contreBonCaisseService.addContreBonCaisse(this.contreBonCaisse).subscribe(res => {
      this.contreBonCaisseService.getContreBonCaisseList();
      this.dialogMat.close();
      this.notifService.success('Contre bon Caisse ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
