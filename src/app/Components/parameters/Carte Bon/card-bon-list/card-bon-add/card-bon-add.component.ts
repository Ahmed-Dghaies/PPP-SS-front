import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { NgForm } from '@angular/forms';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';

@Component({
  selector: 'app-card-bon-add',
  templateUrl: './card-bon-add.component.html',
  styleUrls: ['./card-bon-add.component.css']
})
export class CardBonAddComponent implements OnInit {

  public carteBon: CarteBon;
  public prices: number[];
  public width: number;
  public screenHeight: number;
  public screenWidth: number;

  constructor(private dialogMat: MatDialogRef<CardBonAddComponent>,
              private carteBonService: CarteBonService,
              public carteBonTypeService: CarteBonTypeService,
              public prixCarburantService: PrixCarburantService,
              private notifService: NotificationService) {
    this.carteBon = new CarteBon();
    this.prices = [];
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

  ngOnInit() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.carteBon.date = date;
    this.carteBonTypeService.getCardTypesList();
    this.prixCarburantService.getCarburantList();
  }

  getCarburantPrices(cardType: string): void {
    this.prices = [];
    const cardTypeResult = this.carteBonTypeService.cardTypes.filter(x => x.cardCode === cardType);
    const carburant = cardTypeResult[0].cardCarburant;
    const quantity = cardTypeResult[0].numberOfLiters;
    const cardPriceResult = this.prixCarburantService.prixCarburants.filter(x => x.carburant === carburant).slice(0, 7);
    console.log(carburant);
    console.log(cardPriceResult);
    console.log(quantity);
    let price: number;
    for (let _i = 0; _i < 7; _i++) {
      price = parseFloat((quantity * cardPriceResult[_i].prix).toFixed(3));
      this.prices.push(price);
    }
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addCarteBon(): void {
    this.carteBon.totalValue = parseFloat((this.carteBon.cardValue * this.carteBon.numberOfCards).toFixed(3));
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
