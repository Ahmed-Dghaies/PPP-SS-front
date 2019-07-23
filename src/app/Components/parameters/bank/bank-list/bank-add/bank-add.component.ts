import { Component, OnInit } from '@angular/core';
import { Bank } from 'app/shared/models/bank';
import { MatDialogRef } from '@angular/material';
import { BankService } from 'app/shared/services/bank.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent implements OnInit {

  public bank: Bank;
  public width: number;
  public error: boolean;
  public errorMessage: string;
  public prices: number[];


  constructor(private dialogMat: MatDialogRef<BankAddComponent>,
              private bankService: BankService,
              private notifService: NotificationService) {
    this.bank = new Bank();
    this.width = 2;
    this.prices = [];
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addBank(): void {
    this.bankService.addBank(this.bank).subscribe(res => {
      this.bankService.getBanksList();
      this.dialogMat.close();
      this.notifService.success('Bank ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
