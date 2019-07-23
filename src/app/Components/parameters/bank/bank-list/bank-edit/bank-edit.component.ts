import { Component, OnInit, Inject } from '@angular/core';
import { Bank } from 'app/shared/models/bank';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BankService } from 'app/shared/services/bank.service';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  public bank: Bank;
  public width: number;

  constructor(public dialogRef: MatDialogRef<BankEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private bankService: BankService,
              private sessionService: SessionService,
              private notifservice: NotificationService) {
    this.bank = data.bank;
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateBank(): void {
    this.bankService.updateBank(this.bank._id, this.bank).subscribe(res => {
      this.bankService.getBanksList();
      this.dialogRef.close();
      this.notifservice.success('Bank modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
