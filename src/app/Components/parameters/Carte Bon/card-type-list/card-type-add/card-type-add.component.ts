import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';
import { MatDialogRef } from '@angular/material';
import { CardType } from 'app/shared/models/cardType.model';
import { NotificationService } from 'app/shared/services/notification.service';

@Component({
  selector: 'app-card-type-add',
  templateUrl: './card-type-add.component.html',
  styleUrls: ['./card-type-add.component.css']
})
export class CardTypeAddComponent implements OnInit {

  public cardType: CardType;

  constructor(
    private dialogRef: MatDialogRef<CardTypeAddComponent>,
    private cardTypeService: CarteBonTypeService,
    private notifService: NotificationService) {
    this.cardType = new CardType();
  }

  addCardType() {
    this.cardTypeService.addCardType(this.cardType)
      .subscribe(
        res => {
          this.cardTypeService.getCardTypesList();
          this.dialogRef.close();
          this.notifService.success('Carte Bon Type ajouter avec succés');
        },
        err => console.log(err)
      );
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
  }

}
