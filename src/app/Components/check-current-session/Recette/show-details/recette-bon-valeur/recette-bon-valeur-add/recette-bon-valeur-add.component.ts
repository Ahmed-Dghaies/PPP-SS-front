import { Component, OnInit } from '@angular/core';
import { BonValeur } from 'app/shared/models/bonValeur.model';
import { MatDialogRef } from '@angular/material';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-bon-valeur-add',
  templateUrl: './recette-bon-valeur-add.component.html',
  styleUrls: ['./recette-bon-valeur-add.component.css']
})
export class RecetteBonValeurAddComponent implements OnInit {

  public bonValeur: BonValeur;
  public width: number;

  constructor(private dialogMat: MatDialogRef<RecetteBonValeurAddComponent>,
              private bonValeurService: BonValeurService,
              private notifService: NotificationService,
              private sessionService: SessionService) {
    this.bonValeur = new BonValeur();
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.bonValeur.date = date;
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addBonValeur(): void {
    this.bonValeur.totalValue = this.bonValeur.cardValue * this.bonValeur.numberOfCards;
    this.bonValeur.state = 'Non';
    this.bonValeur.sessionId = this.sessionService.sessions[0]._id;
    this.bonValeurService.addBonValeur(this.bonValeur).subscribe(res => {
      this.bonValeurService.getBonValeursListById(this.sessionService.currentSessionId);
      this.dialogMat.close();
      this.notifService.success('Bon Valeur ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
