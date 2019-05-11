import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientService } from 'app/shared/services/client.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { CarteBonTypeService } from 'app/shared/services/carte-bon-type.service';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';
import { IndexService } from 'app/shared/services/index.service';
import { CiterneService } from 'app/shared/services/citerne.service';
import { DistributeurService } from 'app/shared/services/distributeur.service';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { PompisteService } from 'app/shared/services/pompiste.service';
import { EventService } from 'app/shared/services/event.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  public id: string;
  public msg: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private clientService: ClientService,
    private cardTypeService: CarteBonTypeService,
    private releveIndexService: ReleveIndexService,
    private indexService: IndexService,
    private citerneService: CiterneService,
    private distributeurService: DistributeurService,
    private carburantService: PrixCarburantService,
    private pompisteService: PompisteService,
    private notifService: NotificationService,
    private eventService: EventService) {
    this.id = data.id;
    this.msg = data.msg;
  }

  ngOnInit() {
  }

  delete() {
    if (this.msg === 'client') {
      this.deleteClient();
    } else if (this.msg === 'type carte bon') {
      this.deleteCardType();
    } else if (this.msg === 'relevé index') {
      this.deleteReleveIndex();
    } else if (this.msg === 'index') {
      this.deleteIndex();
    } else if (this.msg === 'citerne') {
      this.deleteCiterne();
    } else if (this.msg === 'distributeur') {
      this.deleteDistributeur();
    } else if (this.msg === 'carburant') {
      this.deleteCarburant();
    } else if (this.msg === 'Pompiste') {
      this.deletePompiste();
    } else if (this.msg === 'Evenement') {
      this.deleteEvent();
    }
  }

  annuler(): void {
    this.dialogRef.close();
  }

  deleteCarburant(): void {
    this.carburantService.deleteCarburant(this.id).subscribe(res => {
      this.carburantService.getCarburantList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteDistributeur(): void {
    this.distributeurService.deleteDistributeur(this.id).subscribe(res => {
      this.distributeurService.getDistributeursList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCiterne(): void {
    this.citerneService.deleteCiterne(this.id).subscribe(res => {
      this.citerneService.getCiternesList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteReleveIndex(): void {
    this.releveIndexService.deleteReleveIndex(this.id).subscribe(res => {
      this.releveIndexService.getReleveIndexsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteIndex(): void {
    this.indexService.deleteIndex(this.id).subscribe(res => {
      this.indexService.getIndexList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteClient(): void {
    this.clientService.deleteClient(this.id).subscribe(res => {
      this.clientService.getClientsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCardType(): void {
    this.cardTypeService.deleteCardType(this.id).subscribe(res => {
      this.cardTypeService.getCardTypesList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deletePompiste(): void {
    this.pompisteService.deletePompiste(this.id).subscribe(res => {
      this.pompisteService.getpompistesList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteEvent(): void {

    this.eventService.deleteEvent(this.data.event._id).subscribe(res => {
      this.eventService.getEvents();
      this.notifService.success('Evénement supprimé');
      this.dialogRef.close();
    },
    err => {
      console.log(err);
      this.notifService.warn('Erreur');
      this.dialogRef.close();
    });
  }

}
