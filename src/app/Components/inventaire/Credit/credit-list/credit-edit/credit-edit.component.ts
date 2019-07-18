import { Component, OnInit, Inject } from '@angular/core';
import { Credit } from 'app/shared/models/Credit.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CreditService } from 'app/shared/services/credit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {

  public credit: Credit;
  public width: number;

  constructor(public dialogRef: MatDialogRef<CreditEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private creditService: CreditService,
              private notifservice: NotificationService) {
    this.credit = data.credit;
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

  updateCredit(): void {
    this.creditService.updateCredit(this.credit._id, this.credit).subscribe(res => {
      this.creditService.getCreditsList();
      this.dialogRef.close();
      this.notifservice.success('Credit modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
