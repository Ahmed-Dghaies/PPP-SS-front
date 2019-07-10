import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { Session } from 'app/shared/models/session.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-session',
  templateUrl: './modify-session.component.html',
  styleUrls: ['./modify-session.component.css']
})
export class ModifySessionComponent implements OnInit {

  public session: Session;

  constructor(
    public dialogRef: MatDialogRef<ModifySessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sessionService: SessionService,
    private notifservice: NotificationService) {
    this.session = data.session;
  }

  updateSession(): void {
    this.sessionService.updateSession(this.session._id, this.session.description)
      .subscribe(res => {
        this.sessionService.getCurrentSession();
        this.dialogRef.close();
        this.notifservice.success('Session modifié avec succés');
      },
        err => {
          console.log(err);
          this.notifservice.warn('Erreur');
        });
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
  }

}
