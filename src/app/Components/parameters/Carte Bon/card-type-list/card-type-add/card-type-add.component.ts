import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';
import { MatDialogRef } from '@angular/material';
import { CardType } from 'app/shared/models/cardType.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { CarburantService } from 'app/shared/services/carburant.service';

@Component({
  selector: 'app-card-type-add',
  templateUrl: './card-type-add.component.html',
  styleUrls: ['./card-type-add.component.css']
})
export class CardTypeAddComponent implements OnInit {

  public cardType: CardType;
  public width: number;
  public screenHeight: number;
  public screenWidth: number;

  constructor(
    private dialogRef: MatDialogRef<CardTypeAddComponent>,
    private cardTypeService: CarteBonTypeService,
    private notifService: NotificationService,
    public carburantService: CarburantService) {
    this.cardType = new CardType();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.width =  1;
    } else {
      this.width =  2;
    }
  }

  addCardType() {
    this.cardTypeService.addCardType(this.cardType)
      .subscribe(
        res => {
          this.cardTypeService.getCardTypesList();
          this.dialogRef.close();
          this.notifService.success('Carte Bon Type ajouter avec succés');
        },
        err => {
          this.notifService.warn('Error');
          console.log(err);
        }
      );
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
    this.carburantService.getCarburantsList();
    this.getScreenSize();
  }

}
