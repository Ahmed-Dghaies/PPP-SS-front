import { Component, OnInit, Inject } from '@angular/core';
import { Cheque } from 'app/shared/models/Cheque.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChequeService } from 'app/shared/services/cheque.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cheque-edit',
  templateUrl: './cheque-edit.component.html',
  styleUrls: ['./cheque-edit.component.css']
})
export class ChequeEditComponent implements OnInit {

  public cheque: Cheque;
  public width: number;

  constructor(public dialogRef: MatDialogRef<ChequeEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private chequeService: ChequeService,
              private notifservice: NotificationService) {
    this.cheque = data.cheque;
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

  updateCheque(): void {
    this.chequeService.updateCheque(this.cheque._id, this.cheque).subscribe(res => {
      this.chequeService.getChequesList();
      this.dialogRef.close();
      this.notifservice.success('Cheque modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
