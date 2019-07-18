import { Component, OnInit, Inject } from '@angular/core';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';

@Component({
  selector: 'app-card-bon-edit',
  templateUrl: './card-bon-edit.component.html',
  styleUrls: ['./card-bon-edit.component.css']
})
export class CardBonEditComponent implements OnInit {

  public carteBon: CarteBon;
  public width: number;

  constructor(public dialogRef: MatDialogRef<CardBonEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private carteBonService: CarteBonService,
              public carteBonTypeService: CarteBonTypeService,
              private notifservice: NotificationService) {
    this.carteBon = data.carteBon;
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    this.carteBonTypeService.getCardTypesList();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateCarteBon(): void {
    this.carteBon.totalValue = parseFloat((this.carteBon.cardValue * this.carteBon.numberOfCards).toFixed(3));
    this.carteBonService.updateCarteBon(this.carteBon._id, this.carteBon).subscribe(res => {
      this.carteBonService.getCarteBonsList();
      this.dialogRef.close();
      this.notifservice.success('Carte Bon modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
