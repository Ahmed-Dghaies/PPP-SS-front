import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ContreBonService } from 'app/shared/services/contre-bon.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { ContreBon } from 'app/shared/models/contreBon';

@Component({
  selector: 'app-contre-bon-add',
  templateUrl: './contre-bon-add.component.html',
  styleUrls: ['./contre-bon-add.component.css']
})
export class ContreBonAddComponent implements OnInit {

  public contreBon: ContreBon;
  public numberOfCards: number;
  public width: number;
  public error: boolean;
  public errorMessage: string;
  public prices: number[];


  constructor(private dialogMat: MatDialogRef<ContreBonAddComponent>,
              private contreBonService: ContreBonService,
              private notifService: NotificationService) {
    this.contreBon = new ContreBon();
    this.width = 2;
    this.prices = [];
  }

  ngOnInit() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.contreBon.date = date;
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addContreBon(): void {
    this.contreBon.caisseState = 'Non';
    this.contreBon.clientState = 'Non';
    this.contreBon.color = 'rgba(255,0,0,0.2)';
    this.contreBonService.addContreBon(this.contreBon, this.numberOfCards).subscribe(res => {
      this.contreBonService.getContreBonsList();
      this.dialogMat.close();
      this.notifService.success('Contre bon ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
