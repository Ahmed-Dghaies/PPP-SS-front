import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { Session } from 'app/shared/models/session.model';
import { PompisteService } from 'app/shared/services/pompiste.service';
import { Pompiste } from 'app/shared/models/pompiste.model';
import { IndexService } from 'app/shared/services/index.service';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';

@Component({
  selector: 'app-session-pompiste-list',
  templateUrl: './session-pompiste-list.component.html',
  styleUrls: ['./session-pompiste-list.component.css']
})
export class SessionPompisteListComponent implements OnInit {

  public session: Session;
  public responsibleIndexs: any[];
  public displayedColumns: string[];
  public heures: number;
  public pompiste: Pompiste;
  public width: number;
  public error: string;
  screenHeight: any;
  screenWidth: any;

  constructor(public matDialogRef: MatDialogRef<SessionPompisteListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private sessionService: SessionService,
              private notifService: NotificationService,
              public pompisteService: PompisteService,
              public indexService: IndexService,
              public releveIndexService: ReleveIndexService,
              public prixCarburantService: PrixCarburantService) {
    this.session = data.session;
    this.displayedColumns = ['Nom', 'Heures Pres', 'Liste des indexs', 'actions'];
    this.responsibleIndexs = [];
    this.pompisteService.getpompistesList();
    this.width =  2;
    this.error = '';
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 650) {
      this.width =  1;
    } else {
      this.width =  2;
    }
  }

  ngOnInit() {
    this.indexService.getIndexList();
    this.prixCarburantService.getCarburantList();
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
    this.releveIndexService.listReleveIndexs = [];
    this.responsibleIndexs = [];
  }

  addPompisteToSession(): void {
    let findPompiste = false;
    let findIndex = false;
    this.session.personnes.forEach(p => {
      if (p.id_pompiste === this.pompiste._id) {
        findPompiste = true;
      }
      this.responsibleIndexs.forEach(r => {
        if (p.indexs.includes(r)) {
          findIndex = true;
          this.error = r + ' est déja affecté';
        }
      });

    });

    if (findPompiste) {
      this.notifService.warn('Pompiste existe déjà');
    } else if (findIndex) {
      this.notifService.warn('Index déja affecté');
    } else {
      const pompisteVM = {
        id_pompiste: this.pompiste._id,
        nom_pompiste: this.pompiste.name,
        heures_pres: this.heures,
        indexs: this.responsibleIndexs
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

      this.releveIndexService.assignIndexs( pompisteVM,
                                            this.session._id,
                                            this.indexService.indexs,
                                            this.prixCarburantService.prixCarburants);

    }
  }


}
