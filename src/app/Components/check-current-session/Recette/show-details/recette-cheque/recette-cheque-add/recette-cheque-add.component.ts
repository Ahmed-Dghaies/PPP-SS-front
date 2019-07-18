import { Component, OnInit } from '@angular/core';
import { Cheque } from 'app/shared/models/Cheque.model';
import { MatDialogRef } from '@angular/material';
import { ChequeService } from 'app/shared/services/cheque.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';

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
    this.cheque.state = 'Non';
    this.cheque.sessionId = this.sessionService.sessions[0]._id;
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
