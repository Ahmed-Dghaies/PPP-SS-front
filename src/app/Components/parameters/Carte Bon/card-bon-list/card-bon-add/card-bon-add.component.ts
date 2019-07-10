import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { NgForm } from '@angular/forms';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';

@Component({
  selector: 'app-card-bon-add',
  templateUrl: './card-bon-add.component.html',
  styleUrls: ['./card-bon-add.component.css']
})
export class CardBonAddComponent implements OnInit {

  public carteBon: CarteBon;
  public width: number;

  constructor(private dialogMat: MatDialogRef<CardBonAddComponent>,
              private carteBonService: CarteBonService,
              public carteBonTypeService: CarteBonTypeService,
              private notifService: NotificationService) {
    this.carteBon = new CarteBon();
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.carteBon.date = date;
    this.carteBonTypeService.getCardTypesList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addCarteBon(): void {
    this.carteBonService.addCarteBon(this.carteBon).subscribe(res => {
      this.carteBonService.getCarteBonsList();
      this.dialogMat.close();
      this.notifService.success('Carte Bon ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
