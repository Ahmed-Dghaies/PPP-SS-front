import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { Session } from 'app/shared/models/session.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { ConfirmSessionCloserComponent } from '@ComSession/confirm-session-closer/confirm-session-closer.component';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ModifySessionComponent } from './modify-session/modify-session.component';
import { SessionPompisteListComponent } from './session-pompiste-list/session-pompiste-list.component';
import { OpenSessionComponent } from './open-session/open-session.component';
import { Pompiste } from 'app/shared/models/pompiste.model';

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

  updateSession(session: Session): void {
    this.matDialog.open(ModifySessionComponent, {
      panelClass: 'full-width-dialog',
      data: { session : Object.assign({}, session) }
    });
  }

  openPompisteListDialog(session: Session): void {
    this.matDialog.open(SessionPompisteListComponent, {
      panelClass: 'full-width-dialog',
      data: { session }
    });
  }

  CreateNewSession(): Session {
    const session = new Session();
    session.state = 'Open';
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    const hour = datetime.getHours();
    let poste = '';
    let description = '';
    if ((hour >= 6) && (hour < 14)) {
      poste = 'P1.2';
      description = 'Poste de ' + hour + 'H à 14H';
    } else if ((hour >= 14) && (hour < 22)) {
      poste = 'P2.2';
      description = 'Poste de ' + hour + 'H à 22H';
    } else if ((hour === 22) || (hour === 23) || ((hour >= 0) && (hour < 6))) {
      poste = 'P3.2';
      description = 'Poste de ' + hour + 'H à 6H de matin';
    }
    session.date = date;
    session.poste = poste;
    session.description = description;
    return session;
  }

  openNewSessionDialog(): void {
    const session = this.CreateNewSession();
    console.log(session);
    this.matDialog.open(OpenSessionComponent, {
      panelClass: 'full-width-dialog',
      data: {session: Object.assign({}, session)}
    });
  }

  closeSession(): void {
    this.matDialog.open(ConfirmSessionCloserComponent);
  }
}
