import { Component, OnInit, ViewChild } from '@angular/core';
import { ReleveIndex } from 'app/shared/models/ReleveIndex.model';
import { MatDialogRef, MatSort, MatPaginator } from '@angular/material';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { IndexService } from 'app/shared/services/index.service';
import { Index } from 'app/shared/models/Index.model';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';
import { PrixCarburant } from 'app/shared/models/prixcarburant';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-releve-index-add',
  templateUrl: './releveIndex-add.component.html',
  styleUrls: ['./releveIndex-add.component.css']
})
export class ReleveIndexAddComponent implements OnInit {

  public releveIndex: ReleveIndex;
  public carburant: string;
  public indexValue: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<ReleveIndexAddComponent>,
    public releveIndexService: ReleveIndexService,
    public sessionService: SessionService,
    private indexService: IndexService,
    private carburantService: PrixCarburantService,
    private notifService: NotificationService) {
    this.carburant = '';
    this.releveIndex = new ReleveIndex();
    this.indexValue = -1;
  }

  addReleveIndex() {
    this.indexService.getCarburant(this.releveIndex.reference).subscribe((indexData: Index) => {
      this.carburant = indexData.carburant;
      this.carburantService.getPrix(this.carburant).subscribe((carburantData: PrixCarburant) => {
        this.releveIndex.prix = carburantData.prix;
        this.releveIndexService.addReleveIndex(this.releveIndex)
          .subscribe(
            res => {
              this.releveIndexService.getReleveIndexsList(this.sessionService.currentSessionId );
              this.dialogRef.close();
              this.notifService.success('relevé index ajouter avec succés');
            },
            err => {
              console.log(err);
              this.notifService.warn('Erreur');
            }
          );
      },
        err => {
          {
            console.log(err);
            this.notifService.warn('Erreur');
          }
        });
    },
      err => {
        {
          console.log(err);
          this.notifService.warn('Erreur');
        }
      });
  }

  getIndexValue(reference: string): void {
    const res = this.releveIndexService.indexs.filter(x => x.reference === reference);
    this.releveIndex.depart = res[0].valeurIndex;
    this.releveIndex.arrive = res[0].valeurIndex;
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
    this.releveIndexService.getIndexsNames();
    this.releveIndexService.getSessionPompiste();
  }

}
