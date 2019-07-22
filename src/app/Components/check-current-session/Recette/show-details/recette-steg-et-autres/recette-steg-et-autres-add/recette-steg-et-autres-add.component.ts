import { Component, OnInit } from '@angular/core';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { MatDialogRef } from '@angular/material';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { CarburantService } from 'app/shared/services/carburant.service';
import { ClientService } from 'app/shared/services/client.service';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';

@Component({
  selector: 'app-recette-steg-et-autres-add',
  templateUrl: './recette-steg-et-autres-add.component.html',
  styleUrls: ['./recette-steg-et-autres-add.component.css']
})
export class RecetteStegEtAutresAddComponent implements OnInit {

  public stegEtAutre: StegEtAutre;
  public width: number;
  public error: boolean;
  public errorMessage: string;
  public prices: number[];


  constructor(private dialogMat: MatDialogRef<RecetteStegEtAutresAddComponent>,
              private stegEtAutreService: StegEtAutresService,
              private sessionService: SessionService,
              private clientService: ClientService,
              private notifService: NotificationService,
              private carburantService: CarburantService,
              private prixCarburantService: PrixCarburantService) {
    this.stegEtAutre = new StegEtAutre();
    this.width = 2;
    this.prices = [];
  }

  getClient(clientNumber: string) {
    this.error = false;
    if (clientNumber.length === 4) {
      const res = this.clientService.clients.filter(c => c.number === clientNumber);
      if (res.length === 0) {
        this.error = true;
        this.errorMessage = 'Error: le numéro de client doit être composé de 4 chiffres';
        this.stegEtAutre.clientName = undefined;
      } else {
        this.stegEtAutre.clientName = res[0].name;
      }
    } else {
      this.error = true;
      this.errorMessage = 'Error: ce n\'est pas un numéro de client';
      this.stegEtAutre.clientName = undefined;
    }

  }

  getCarburantPrices(carburant: string): void {
    this.prices = [];
    const carburantObject = this.carburantService.carburants.filter(c => c._id === carburant);
    const priceResult = this.prixCarburantService.prixCarburants.filter(x => x.carburant === carburantObject[0].ref).slice(0, 7);
    console.log(priceResult);
    let price: number;
    for (let _i = 0; _i < 7; _i++) {
      try {
        price = parseFloat(priceResult[_i].prix.toFixed(3));
      } catch (err) {
        this.notifService.warn('Essayez à nouveau, une erreur est survenue');
        this.stegEtAutre.carburant = undefined;
        this.prices = [];
      }
      this.prices.push(price);
    }
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.stegEtAutre.date = date;
    this.carburantService.getCarburantsList();
    this.prixCarburantService.getCarburantList();
    this.clientService.getClientsList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addStegEtAutre(): void {
    this.stegEtAutre.sessionId = this.sessionService.currentSessionId;
    this.stegEtAutre.cardValue = parseFloat((this.stegEtAutre.literPrice * this.stegEtAutre.numberOfLiters).toFixed(3));
    this.stegEtAutre.totalValue = parseFloat((this.stegEtAutre.cardValue * this.stegEtAutre.numberOfCards).toFixed(3));
    this.stegEtAutreService.addStegEtAutre(this.stegEtAutre).subscribe(res => {
      this.stegEtAutreService.getStegEtAutresListById(this.sessionService.currentSessionId);
      this.dialogMat.close();
      this.notifService.success('Bon ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
