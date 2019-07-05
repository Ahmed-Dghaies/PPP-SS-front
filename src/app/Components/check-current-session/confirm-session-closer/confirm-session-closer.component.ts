import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from 'app/shared/services/notification.service';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-confirm-session-closer',
  templateUrl: './confirm-session-closer.component.html',
  styleUrls: ['./confirm-session-closer.component.css']
})
export class ConfirmSessionCloserComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ConfirmSessionCloserComponent>,
              private notifService: NotificationService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private sessionService: SessionService) {
  }

  annuler(): void {
    this.dialogRef.close();
  }

  CloseSession(): void {
    console.log('here');
    this.sessionService.closeSession().subscribe(res => {
      this.sessionService.getCurrentSession();
      console.log('here');
      this.dialogRef.close();
      this.notifService.success(`session fermer avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
