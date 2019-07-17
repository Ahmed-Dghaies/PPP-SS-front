import { Component, OnInit } from '@angular/core';
import { BonValeur } from 'app/shared/models/bonValeur.model';
import { MatDialogRef } from '@angular/material';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bon-valeur-add',
  templateUrl: './bon-valeur-add.component.html',
  styleUrls: ['./bon-valeur-add.component.css']
})
export class BonValeurAddComponent implements OnInit {

  public bonValeur: BonValeur;
  public width: number;

  constructor(private dialogMat: MatDialogRef<BonValeurAddComponent>,
              private bonValeurService: BonValeurService,
              private notifService: NotificationService) {
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
    this.bonValeurService.addBonValeur(this.bonValeur).subscribe(res => {
      this.bonValeurService.getBonValeursList();
      this.dialogMat.close();
      this.notifService.success('Bon Valeur ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
