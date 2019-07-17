import { Component, OnInit, Inject } from '@angular/core';
import { BonValeur } from 'app/shared/models/bonValeur.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bon-valeur-edit',
  templateUrl: './bon-valeur-edit.component.html',
  styleUrls: ['./bon-valeur-edit.component.css']
})
export class BonValeurEditComponent implements OnInit {

  public bonValeur: BonValeur;
  public width: number;

  constructor(public dialogRef: MatDialogRef<BonValeurEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private bonValeurService: BonValeurService,
              private notifservice: NotificationService) {
    this.bonValeur = data.bonValeur;
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

  updateBonValeur(): void {
    this.bonValeur.totalValue = this.bonValeur.cardValue * this.bonValeur.numberOfCards;
    this.bonValeurService.updateBonValeur(this.bonValeur._id, this.bonValeur).subscribe(res => {
      this.bonValeurService.getBonValeursList();
      this.dialogRef.close();
      this.notifservice.success('Bon Valeur modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
