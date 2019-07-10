import { Component, OnInit, Inject } from '@angular/core';
import { Session } from 'app/shared/models/session.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-open-session',
  templateUrl: './open-session.component.html',
  styleUrls: ['./open-session.component.css']
})
export class OpenSessionComponent implements OnInit {

  public session: Session;

  constructor(
    private dialogRef: MatDialogRef<OpenSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sessionService: SessionService,
    private notifService: NotificationService) {
    this.session = data.session;
  }

  OpenNewSession() {
    this.sessionService.OpenNewSession(this.session)
      .subscribe(
        res => {
          this.sessionService.getCurrentSession();
          this.dialogRef.close();
          this.notifService.success('Session ouverte avec succès');
        },
        err => console.log(err)
      );
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
