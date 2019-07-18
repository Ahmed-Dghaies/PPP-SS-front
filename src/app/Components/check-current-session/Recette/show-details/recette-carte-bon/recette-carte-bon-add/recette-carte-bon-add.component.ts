import { Component, OnInit, HostListener } from '@angular/core';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { MatDialogRef } from '@angular/material';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-carte-bon-add',
  templateUrl: './recette-carte-bon-add.component.html',
  styleUrls: ['./recette-carte-bon-add.component.css']
})
export class RecetteCarteBonAddComponent implements OnInit {

  public carteBon: CarteBon;
  public prices: number[];
  public width: number;
  public screenHeight: number;
  public screenWidth: number;

  constructor(private dialogMat: MatDialogRef<RecetteCarteBonAddComponent>,
              private carteBonService: CarteBonService,
              public carteBonTypeService: CarteBonTypeService,
              public prixCarburantService: PrixCarburantService,
              private notifService: NotificationService,
              private sessionService: SessionService) {
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
    this.prices = [0, 0, 0, 0, 0, 0, 0];
  }

  getCarburantPrices(cardType: string): void {
    this.prices = [];
    const cardTypeResult = this.carteBonTypeService.cardTypes.filter(x => x.cardCode === cardType);
    const carburant = cardTypeResult[0].cardCarburant;
    const quantity = cardTypeResult[0].numberOfLiters;
    const cardPriceResult = this.prixCarburantService.prixCarburants.filter(x => x.carburant === carburant).slice(0, 7);
    let price: number;
    for (let _i = 0; _i < 7; _i++) {
      try {
        price = parseFloat((quantity * cardPriceResult[_i].prix).toFixed(3));
      } catch (err) {
        this.notifService.warn('Essayez à nouveau, une erreur est survenue');
        this.carteBon.cardType = undefined;
        this.prices = [0, 0, 0, 0, 0, 0, 0];
      }
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
    this.carteBon.state = 'Non';
    this.carteBon.sessionId = this.sessionService.sessions[0]._id;
    this.carteBon.totalValue = parseFloat((this.carteBon.cardValue * this.carteBon.numberOfCards).toFixed(3));
    this.carteBonService.addCarteBon(this.carteBon).subscribe(res => {
      this.carteBonService.getCarteBonsListById(this.sessionService.currentSessionId);
      this.dialogMat.close();
      this.notifService.success('Carte Bon ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
