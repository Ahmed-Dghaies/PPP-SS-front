import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { Session } from 'app/shared/models/session.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { ConfirmSessionCloserComponent } from '@ComSession/confirm-session-closer/confirm-session-closer.component';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SessionPompisteListComponent } from './session-pompiste-list/session-pompiste-list.component';

@Component({
  selector: 'app-check-current-session',
  templateUrl: './check-current-session.component.html',
  styleUrls: ['./check-current-session.component.css']
})
export class CheckCurrentSessionComponent implements OnInit {

  public displayedColumns: string[];
  screenHeight: any;
  screenWidth: any;

  constructor(public sessionService: SessionService,
              private matDialog: MatDialog) {
    this.displayedColumns = ['date', 'poste', 'description', 'state', 'actions'];
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.displayedColumns = ['date', 'poste', 'state', 'actions'];
    } else {
      this.displayedColumns = ['date', 'poste', 'description', 'state', 'actions'];
    }
  }

  ngOnInit() {
    this.sessionService.getCurrentSession();
  }

  openPompisteListDialog(session: Session): void {
    this.matDialog.open(SessionPompisteListComponent, {
      panelClass: 'full-width-dialog',
      data: { session }
    });
  }

  closeSession(): void {
    this.matDialog.open(ConfirmSessionCloserComponent);
  }
}
