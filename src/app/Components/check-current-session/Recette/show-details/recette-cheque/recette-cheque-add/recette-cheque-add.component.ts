import { Component, OnInit } from '@angular/core';
import { Cheque } from 'app/shared/models/Cheque.model';
import { MatDialogRef } from '@angular/material';
import { ChequeService } from 'app/shared/services/cheque.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { BankService } from 'app/shared/services/bank.service';

@Component({
  selector: 'app-recette-cheque-add',
  templateUrl: './recette-cheque-add.component.html',
  styleUrls: ['./recette-cheque-add.component.css']
})
export class RecetteChequeAddComponent implements OnInit {

  public cheque: Cheque;
  public width: number;

  constructor(private dialogMat: MatDialogRef<RecetteChequeAddComponent>,
              private chequeService: ChequeService,
              private sessionService: SessionService,
              private notifService: NotificationService,
              private bankService: BankService) {
    this.cheque = new Cheque();
    this.width = 2;
  }

  getBankAgency(rib: string) {
    console.log('here');
    const bankCode = parseFloat(rib.slice(0, 2));
    const agencyCode = parseFloat(rib.slice(3, 6));
    const res = this.bankService.banks.filter(b => b.bankCode === bankCode).filter(b => b.agencyCode === agencyCode);7
    if (res.length > 0) {
      this.cheque.bankName = res[0].bankName;
      this.cheque.agency = res[0].agencyName;
    }
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.cheque.date = date;
    this.bankService.getBanksList();
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addCheque(): void {
    this.cheque.state = 'Non';
    this.cheque.sessionId = this.sessionService.sessions[0]._id;
    this.chequeService.addCheque(this.cheque).subscribe(res => {
      this.chequeService.getChequesListById(this.sessionService.currentSessionId);
      this.dialogMat.close();
      this.notifService.success('Cheque ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
