import { Component, OnInit } from '@angular/core';
import { Cheque } from 'app/shared/models/Cheque.model';
import { MatDialogRef } from '@angular/material';
import { ChequeService } from 'app/shared/services/cheque.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cheque-add',
  templateUrl: './cheque-add.component.html',
  styleUrls: ['./cheque-add.component.css']
})
export class ChequeAddComponent implements OnInit {

  public cheque: Cheque;
  public width: number;

  constructor(private dialogMat: MatDialogRef<ChequeAddComponent>,
              private chequeService: ChequeService,
              private notifService: NotificationService) {
    this.cheque = new Cheque();
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.cheque.date = date;
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addCheque(): void {
    this.chequeService.addCheque(this.cheque).subscribe(res => {
      this.chequeService.getChequesList();
      this.dialogMat.close();
      this.notifService.success('Cheque ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
