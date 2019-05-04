import { Component, OnInit, HostListener } from '@angular/core';
import { Index } from 'app/shared/models/Index.model';
import { MatDialogRef } from '@angular/material';
import { IndexService } from 'app/shared/services/index.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { CiterneService } from 'app/shared/services/citerne.service';
import { DistributeurService } from 'app/shared/services/distributeur.service';
import { PrixCarburantService } from 'app/shared/services/prix-carburant.service';

@Component({
  selector: 'app-index-add',
  templateUrl: './index-add.component.html',
  styleUrls: ['./index-add.component.css']
})
export class IndexAddComponent implements OnInit {

  public index: Index;
  public width: number;
  public citerneList: string[];
  public distributeurList: string[];
  public carburantList: string[];
  screenHeight: any;
  screenWidth: any;

  constructor(
    private dialogRef: MatDialogRef<IndexAddComponent>,
    private indexService: IndexService,
    private citerneService: CiterneService,
    private carburantService: PrixCarburantService,
    private distributeurService: DistributeurService,
    private notifService: NotificationService) {
    this.index = new Index();
    this.citerneList = [];
    this.distributeurList = [];
    this.carburantList = [];
    this.citerneService.getCiternesList();
    this.getCiterneNamesList();
    this.distributeurService.getDistributeursList();
    this.getDistributeurNamesList();
    this.carburantService.getCarburantList();
    this.getCarburantNamesList();
    this.getScreenSize();
  }

  getCiterneNamesList() {
    let i;
    for (i = 0; i < this.citerneService.citernes.length; i++) {
      this.citerneList.push(this.citerneService.citernes[i].identifiant);
    }
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

  getCarburantNamesList() {
    let i;
    for (i = 0; i < this.carburantService.carburants.length; i++) {
      if (!this.carburantList.includes(this.carburantService.carburants[i].carburant)) {
        this.carburantList.push(this.carburantService.carburants[i].carburant);
      }
    }
  }

  getDistributeurNamesList() {
    let i;
    for (i = 0; i < this.distributeurService.distributeurs.length; i++) {
      this.distributeurList.push(this.distributeurService.distributeurs[i].reference);
    }
  }

  addIndex() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.index.dernierDate = date;
    this.indexService.addIndex(this.index)
      .subscribe(
        res => {
          this.indexService.getIndexList();
          this.dialogRef.close();
          this.notifService.success('Index ajouter avec succés');
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
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
  }

}
