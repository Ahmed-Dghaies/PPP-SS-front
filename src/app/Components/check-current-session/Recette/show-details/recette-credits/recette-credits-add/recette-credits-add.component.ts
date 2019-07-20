import { Component, OnInit } from '@angular/core';
import { PayementCredit } from 'app/shared/models/payementCredit.model';
import { MatDialogRef } from '@angular/material';
import { ClientService } from 'app/shared/services/client.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { PayementCreditService } from 'app/shared/services/payement-credit.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { CreditService } from 'app/shared/services/credit.service';

@Component({
  selector: 'app-recette-credits-add',
  templateUrl: './recette-credits-add.component.html',
  styleUrls: ['./recette-credits-add.component.css']
})
export class RecetteCreditsAddComponent implements OnInit {

  public payementCredit: PayementCredit;
  public width: number;
  public error: boolean;
  public errorMessage: string;

  constructor(
    private dialogMat: MatDialogRef<RecetteCreditsAddComponent>,
    private payementCreditService: PayementCreditService,
    private creditService: CreditService,
    private notifService: NotificationService,
    private clientService: ClientService,
    private sessionService: SessionService) {
    this.payementCredit = new PayementCredit();
    this.width = 2;
    this.error = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.payementCredit.date = date;
    this.clientService.getClientsList();
    this.creditService.getCreditsList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  getClient(clientNumber: string) {
    this.error = false;
    if (clientNumber.length === 4) {
      const res = this.clientService.clients.filter(c => c.number === clientNumber);
      if (res.length === 0) {
        this.error = true;
        this.errorMessage = 'Error: le numéro de client doit être composé de 4 chiffres';
        this.payementCredit.clientName = undefined;
      } else {
        this.payementCredit.clientName = res[0].name;
      }
    } else {
      this.error = true;
      this.errorMessage = 'Error: ce n\'est pas un numéro de client';
      this.payementCredit.clientName = undefined;
    }

  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addPayementCredit(): void {
    const result = this.creditService.credits.filter(c => c.clientNumber === this.payementCredit.clientNumber);
    if (result[0].creditRestValue < this.payementCredit.payementValue) {
      this.error = true;
      this.errorMessage = 'Error: la valeur du paiement est plus que le crédit (' + result[0].creditRestValue + ')';
      this.payementCredit.payementValue = undefined;
    } else if (result.length > 0) {
      this.payementCredit.sessionId = this.sessionService.currentSessionId;
      const difference = result[0].creditRestValue - this.payementCredit.payementValue;
      result[0].creditRestValue = difference;
      this.creditService.updateCredit(result[0]._id, result[0]).subscribe(res => {
        this.payementCreditService.addPayementCredit(this.payementCredit).subscribe(payementRes => {
          this.payementCreditService.getPayementCreditsList(this.sessionService.currentSessionId);
          this.dialogMat.close();
          this.notifService.success('Payement Credit ajouter avec succés');
        },
          err => {
            console.log(err);
          });
      },
        err => {
          console.log(err);
        });
    } else {
      this.error = true;
      this.errorMessage = 'Error: ce client n\'a aucun crédit';
      this.payementCredit.clientName = undefined;
    }
  }
}
