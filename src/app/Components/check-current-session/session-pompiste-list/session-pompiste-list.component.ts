import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { Session } from 'app/shared/models/session.model';
import { PompisteService } from 'app/shared/services/pompiste.service';
import { Pompiste } from 'app/shared/models/pompiste.model';

@Component({
  selector: 'app-session-pompiste-list',
  templateUrl: './session-pompiste-list.component.html',
  styleUrls: ['./session-pompiste-list.component.css']
})
export class SessionPompisteListComponent implements OnInit {

  public session: Session;
  public displayedColumns: string[];
  public heures: number;
  public pompiste: Pompiste;

  constructor(public matDialogRef: MatDialogRef<SessionPompisteListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private sessionService: SessionService,
              private notifService: NotificationService,
              public pompisteService: PompisteService) {
    this.session = data.session;
    this.displayedColumns = ['Nom', 'Heures Pres', 'actions'];
    this.pompisteService.getpompistesList();
  }

  ngOnInit() {
  }

  onClose(): void {
    this.matDialogRef.close();
  }

  deletePompisteFromSession(idPompiste: string): void {
    this.sessionService.deletePompisteFromSession(idPompiste, this.session._id).subscribe(res => {
      const key = 'session';
      this.session = res[key];
      this.sessionService.getCurrentSession();
      this.notifService.success('Pompiste supprimé');
    },
    err => {
      this.notifService.warn('Erreur');

    });
  }

  selectPompiste(pompiste: Pompiste): void {
    this.pompiste = pompiste;
  }

  addPompisteToSession(): void {
    let find = false;
    this.session.personnes.forEach(p => {
      if (p.id_pompiste === this.pompiste._id) {
        find = true;
      }

    });

    if (find) {
      this.notifService.warn('Pompiste existe déjà');
    } else {

      const pompisteVM = {
        id_pompiste: this.pompiste._id,
        nom_pompiste: this.pompiste.name,
        heures_pres: this.heures
      };

      this.sessionService.addPompisteToSession(pompisteVM, this.session._id).subscribe(res => {

        const key = 'session';
        this.session = res[key];
        this.sessionService.getCurrentSession();
        this.notifService.success('Pompiste Ajouté');

      },
        err => {
          this.notifService.warn('Erreur');
        });

    }
  }


}
