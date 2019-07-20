import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PayementCreditService } from 'app/shared/services/payement-credit.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { PayementCredit } from 'app/shared/models/payementCredit.model';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-recette-credits-edit',
  templateUrl: './recette-credits-edit.component.html',
  styleUrls: ['./recette-credits-edit.component.css']
})
export class RecetteCreditsEditComponent implements OnInit {

  public payementCredit: PayementCredit;
  public width: number;

  constructor(public dialogRef: MatDialogRef<RecetteCreditsEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private payementCreditService: PayementCreditService,
              private notifservice: NotificationService,
              private sessionService: SessionService) {
    this.payementCredit = data.payementCredit;
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
    this.payementCreditService.updatePayementCredit(this.payementCredit._id, this.payementCredit).subscribe(res => {
      this.payementCreditService.getPayementCreditsList(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifservice.success('Payement Credit modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
