import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'app/shared/services/notification.service';
import { SessionService } from 'app/shared/services/session.service';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';

@Component({
  selector: 'app-confirm-session-closer',
  templateUrl: './confirm-session-closer.component.html',
  styleUrls: ['./confirm-session-closer.component.css']
})
export class ConfirmSessionCloserComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ConfirmSessionCloserComponent>,
              private notifService: NotificationService,
              private sessionService: SessionService,
              private releveIndexService: ReleveIndexService) {
  }

  annuler(): void {
    this.dialogRef.close();
  }

  CloseSession(): void {
    this.sessionService.closeSession().subscribe(res => {
      this.sessionService.getCurrentSession();
      this.releveIndexService.clear();
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
