import { Component, OnInit } from '@angular/core';
import { Credit } from 'app/shared/models/credit.model';
import { MatDialogRef } from '@angular/material';
import { CreditService } from 'app/shared/services/credit.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { ClientService } from 'app/shared/services/client.service';

@Component({
  selector: 'app-credit-add',
  templateUrl: './credit-add.component.html',
  styleUrls: ['./credit-add.component.css']
})
export class CreditAddComponent implements OnInit {

  public credit: Credit;
  public width: number;
  public lengthError: boolean;
  public notFoundError: boolean;

  constructor(private dialogMat: MatDialogRef<CreditAddComponent>,
              private creditService: CreditService,
              private notifService: NotificationService,
              private clientService: ClientService) {
    this.credit = new Credit();
    this.width = 2;
    this.lengthError = false;
    this.notFoundError = false;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.credit.date = date;
    this.clientService.getClientsList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  getClient(clientNumber: string) {
    if (clientNumber.length === 4) {
      const res = this.clientService.clients.filter(c => c.number === clientNumber);
      if (res.length === 0) {
        this.notFoundError = true;
        this.notifService.warn('ce n\'est pas un numéro de client');
        this.credit.clientName = undefined;
      } else {
        this.credit.clientName = res[0].name;
      }
    } else {
      this.lengthError = true;
      this.notifService.warn('le numéro de client doit être composé de 4 chiffres');
      this.credit.clientName = undefined;
    }

  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addCredit(): void {
    this.credit.creditRestValue = this.credit.creditOriginalValue;
    this.creditService.addCredit(this.credit).subscribe(res => {
      this.creditService.getCreditsList();
      this.dialogMat.close();
      this.notifService.success('Credit ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
