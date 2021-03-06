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
import { CarburantService } from 'app/shared/services/carburant.service';
import { Citerne } from 'app/shared/models/citerne.model';
import { PrixCarburant } from 'app/shared/models/prixcarburant';
import { Index } from 'app/shared/models/Index.model';
import { SessionService } from 'app/shared/services/session.service';
import { CarteBonService } from 'app/shared/services/carte-bon.service';
import { BonValeurService } from 'app/shared/services/bon-valeur.service';
import { ChequeService } from 'app/shared/services/cheque.service';
import { CreditService } from 'app/shared/services/credit.service';
import { PayementCreditService } from 'app/shared/services/payement-credit.service';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { ContreBonService } from 'app/shared/services/contre-bon.service';
import { SubventionPecheService } from 'app/shared/services/subvention-peche.service';
import { ContreBonClientService } from 'app/shared/services/contre-bon-client.service';
import { ContreBonCaisseService } from 'app/shared/services/contre-bon-caisse.service';

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
    private sessionService: SessionService,
    private prixcarburantService: PrixCarburantService,
    private pompisteService: PompisteService,
    private notifService: NotificationService,
    private eventService: EventService,
    private carburantService: CarburantService,
    private carteBonService: CarteBonService,
    private bonValeurService: BonValeurService,
    private chequeService: ChequeService,
    private creditService: CreditService,
    private payementCreditService: PayementCreditService,
    private stegEtAutreService: StegEtAutresService,
    private contreBonService: ContreBonService,
    private subventionPecheService: SubventionPecheService,
    private contreBonClientService: ContreBonClientService,
    private contreBonCaisseService: ContreBonCaisseService) {
    this.id = data.id;
    this.msg = data.msg;
  }

  ngOnInit() {
    this.sessionService.getCurrentSession();
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
    } else if (this.msg === 'Prix carburant') {
      this.deletePrixCarburant();
    } else if (this.msg === 'Pompiste') {
      this.deletePompiste();
    } else if (this.msg === 'Evenement') {
      this.deleteEvent();
    } else if (this.msg === 'carburant') {
      this.deleteCarburant();
    } else if (this.msg === 'carteBon') {
      this.deleteCarteBon();
    } else if (this.msg === 'bonValeur') {
      this.deleteBonValeur();
    } else if (this.msg === 'cheque') {
      this.deleteCheque();
    } else if (this.msg === 'credit') {
      this.deleteCredit();
    } else if (this.msg === 'recette-carteBon') {
      this.deleteRecetteCarteBon();
    } else if (this.msg === 'recette-bonValeur') {
      this.deleteRecetteBonValeur();
    } else if (this.msg === 'recette-cheque') {
      this.deleteRecetteCheque();
    } else if (this.msg === 'Payement credit') {
      this.deletePayementCredit();
    } else if (this.msg === 'stegEtAutre') {
      this.deleteStegEtAutre();
    } else if (this.msg === 'recette-stegEtAutre') {
      this.deleteRecetteStegEtAutre();
    } else if (this.msg === 'contre bon') {
      this.deleteContreBon();
    } else if (this.msg === 'recette-subventionPeche') {
      this.deleteRecetteSubventionPeche();
    } else if (this.msg === 'subventionPeche') {
      this.deleteSubventionPeche();
    } else if (this.msg === 'recette contre bon client') {
      this.deleteRecetteContreBonClient();
    } else if (this.msg === 'recette contre bon caisse') {
      this.deleteRecetteContreBonCaisse();
    } else if (this.msg === 'contre bon caisse') {
      this.deleteContreBonCaisse();
    }
  }

  annuler(): void {
    this.dialogRef.close();
  }

  deleteContreBon(): void {
    this.contreBonService.deleteContreBon(this.id).subscribe(res => {
      this.contreBonService.getContreBonsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteRecetteContreBonClient(): void {
    this.contreBonClientService.deleteContreBonClient(this.id).subscribe(res => {
      this.contreBonClientService.getContreBonClientListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteRecetteContreBonCaisse(): void {
    this.contreBonCaisseService.deleteContreBonCaisse(this.id).subscribe(res => {
      this.contreBonCaisseService.getContreBonCaisseListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteContreBonCaisse(): void {
    this.contreBonCaisseService.deleteContreBonCaisse(this.id).subscribe(res => {
      this.contreBonCaisseService.getContreBonCaisseList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deletePrixCarburant(): void {
    this.prixcarburantService.deletePrixCarburant(this.id).subscribe(res => {
      this.prixcarburantService.getCarburantList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteRecetteSubventionPeche(): void {
    this.subventionPecheService.deleteSubventionPeche(this.id).subscribe(res => {
      this.subventionPecheService.getSubventionPechesListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteSubventionPeche(): void {
    this.subventionPecheService.deleteSubventionPeche(this.id).subscribe(res => {
      this.subventionPecheService.getSubventionPechesList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteStegEtAutre(): void {
    this.stegEtAutreService.deleteStegEtAutre(this.id).subscribe(res => {
      this.stegEtAutreService.getStegEtAutresList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteRecetteStegEtAutre(): void {
    this.stegEtAutreService.deleteStegEtAutre(this.id).subscribe(res => {
      this.stegEtAutreService.getStegEtAutresListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCarburant(): void {
    this.citerneService.getCiterneByCarburant(this.id).subscribe(data => {
// tslint:disable-next-line: no-string-literal
      data['citernes'].forEach((element: Citerne) => {
        element.carburant = '5ce8b2ac441ba4055c2bd9d9';
        this.citerneService.updateCiterne(element._id, element).subscribe(res => {
        });
      });
    });
    this.prixcarburantService.getCarburantByPrix(this.id).subscribe(data => {
// tslint:disable-next-line: no-string-literal
      data['prix'].forEach((element: PrixCarburant) => {
        this.prixcarburantService.deletePrixCarburant(element._id).subscribe(res => {
        });
      });
    });
    this.carburantService.deleteCarburant(this.id).subscribe(res => {
      this.carburantService.getCarburantsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteDistributeur(): void {
    this.indexService.getIndexByDistributeur(this.id).subscribe((data: Index[]) => {
      data.forEach((element: Index) => {
        this.indexService.deleteIndex(element._id).subscribe(res => {
        });
      });
    });
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
    this.indexService.getIndexByCiterne(this.id).subscribe((data: Index[]) => {
      data.forEach((element: Index) => {
        this.indexService.deleteIndex(element._id).subscribe(res => {
        });
      });
    });
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
      this.releveIndexService.getReleveIndexsList(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCarteBon(): void {
    this.carteBonService.deleteCarteBon(this.id).subscribe(res => {
      this.carteBonService.getCarteBonsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCheque(): void {
    this.chequeService.deleteCheque(this.id).subscribe(res => {
      this.chequeService.getChequesList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCredit(): void {
    this.creditService.deleteCredit(this.id).subscribe(res => {
      this.creditService.getCreditsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deletePayementCredit(): void {
    this.payementCreditService.deletePayementCredit(this.id).subscribe(res => {
      this.payementCreditService.getPayementCreditsList(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteBonValeur(): void {
    this.bonValeurService.deleteBonValeur(this.id).subscribe(res => {
      this.bonValeurService.getBonValeursList();
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

  deleteRecetteCarteBon(): void {
    this.carteBonService.deleteCarteBon(this.id).subscribe(res => {
      this.carteBonService.getCarteBonsListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteRecetteCheque(): void {
    this.chequeService.deleteCheque(this.id).subscribe(res => {
      this.chequeService.getChequesListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteRecetteBonValeur(): void {
    this.bonValeurService.deleteBonValeur(this.id).subscribe(res => {
      this.bonValeurService.getBonValeursListById(this.sessionService.currentSessionId);
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

}
