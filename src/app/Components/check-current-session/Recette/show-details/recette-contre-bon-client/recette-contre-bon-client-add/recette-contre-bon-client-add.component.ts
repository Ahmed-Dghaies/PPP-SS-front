import { Component, OnInit } from '@angular/core';
import { ContreBonClient } from 'app/shared/models/contreBonClient';
import { MatDialogRef } from '@angular/material';
import { ContreBonClientService } from 'app/shared/services/contre-bon-client.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { ContreBonService } from 'app/shared/services/contre-bon.service';

@Component({
  selector: 'app-recette-contre-bon-client-add',
  templateUrl: './recette-contre-bon-client-add.component.html',
  styleUrls: ['./recette-contre-bon-client-add.component.css']
})
export class RecetteContreBonClientAddComponent implements OnInit {

  public contreBonClient: ContreBonClient;
  public width: number;
  public error: boolean;
  public errorMessage: string;
  public prices: number[];


  constructor(private dialogMat: MatDialogRef<RecetteContreBonClientAddComponent>,
              private contreBonClientService: ContreBonClientService,
              private notifService: NotificationService,
              private sessionService: SessionService,
              public contreBonService: ContreBonService) {
    this.contreBonClient = new ContreBonClient();
    this.width = 2;
    this.prices = [];
  }

  ngOnInit() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.contreBonClient.date = date;
    this.contreBonService.getContreBonsList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addContreBonClient(): void {
    this.contreBonClient.sessionId = this.sessionService.currentSessionId;
    this.contreBonClientService.addContreBonClient(this.contreBonClient).subscribe(res => {
      this.contreBonClientService.getContreBonClientList();
      this.dialogMat.close();
      this.notifService.success('Contre bon client ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
