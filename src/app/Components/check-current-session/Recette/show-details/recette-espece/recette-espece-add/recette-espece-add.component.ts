import { Component, OnInit } from '@angular/core';
import { Espece } from 'app/shared/models/espece';
import { MatDialogRef } from '@angular/material';
import { EspeceService } from 'app/shared/services/espece.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { SessionService } from 'app/shared/services/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recette-espece-add',
  templateUrl: './recette-espece-add.component.html',
  styleUrls: ['./recette-espece-add.component.css']
})
export class RecetteEspeceAddComponent implements OnInit {

  public espece: Espece;
  public width: number;

  constructor(private dialogMat: MatDialogRef<RecetteEspeceAddComponent>,
              private especeService: EspeceService,
              private notifService: NotificationService,
              private sessionService: SessionService) {
    this.espece = new Espece();
    this.width = 2;
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

  addEspece(): void {
    this.espece.totalValue = this.espece.type * this.espece.quantity;
    this.espece.state = 'Non';
    this.espece.sessionId = this.sessionService.sessions[0]._id;
    const exists = this.especeService.especes.filter(e => e.type === this.espece.type).filter(e => e.sessionId === this.espece.sessionId);
    if (exists.length > 0) {
      exists[0].quantity += this.espece.quantity;
      exists[0].totalValue = exists[0].type * exists[0].quantity;
      this.especeService.updateEspece(exists[0]._id, exists[0]).subscribe(res => {
        this.especeService.getEspecesListById(this.sessionService.currentSessionId);
        this.dialogMat.close();
        this.notifService.success('Recette espece modifié avec succés');
      },
        err => {
          console.log(err);
        });
    } else {
      this.especeService.addEspece(this.espece).subscribe(res => {
        this.especeService.getEspecesListById(this.sessionService.currentSessionId);
        this.dialogMat.close();
        this.notifService.success('recette espece ajouter avec succés');
      },
        err => {
          console.log(err);
        });
    }
  }

}
