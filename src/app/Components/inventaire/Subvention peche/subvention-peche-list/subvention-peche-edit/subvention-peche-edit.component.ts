import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubventionPeche } from 'app/shared/models/subventionPeche';
import { SubventionPecheService } from 'app/shared/services/subvention-peche.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { SessionService } from 'app/shared/services/session.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subvention-peche-edit',
  templateUrl: './subvention-peche-edit.component.html',
  styleUrls: ['./subvention-peche-edit.component.css']
})
export class SubventionPecheEditComponent implements OnInit {

  public subventionPeche: SubventionPeche;
  public width: number;

  constructor(public dialogRef: MatDialogRef<SubventionPecheEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private subventionPecheService: SubventionPecheService,
              private notifservice: NotificationService,
              private sessionService: SessionService) {
    this.subventionPeche = data.subventionPeche;
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

  updateSubventionPeche(): void {
    this.subventionPecheService.updateSubventionPeche(this.subventionPeche._id, this.subventionPeche).subscribe(res => {
      this.subventionPecheService.getSubventionPechesListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifservice.success('Bon subvention peche modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
