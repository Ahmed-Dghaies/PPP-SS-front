import { Component, OnInit, HostListener } from '@angular/core';
import { Distributeur } from 'app/shared/models/distributeur.model';
import { MatDialogRef } from '@angular/material';
import { DistributeurService } from 'app/shared/services/distributeur.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-distributeur-add',
  templateUrl: './distributeur-add.component.html',
  styleUrls: ['./distributeur-add.component.css']
})
export class DistributeurAddComponent implements OnInit {

  public distributeur: Distributeur;
  public width: number;
  screenHeight: any;
  screenWidth: any;

  constructor(
    private dialogRef: MatDialogRef<DistributeurAddComponent>,
    private distributeurService: DistributeurService,
    private notifService: NotificationService) {
    this.distributeur = new Distributeur();
    this.getScreenSize();
  }

  addDistributeur() {
    this.distributeurService.addDistributeur(this.distributeur)
      .subscribe(
        res => {
          this.distributeurService.getDistributeursList();
          this.dialogRef.close();
          this.notifService.success('Distributeur ajouter avec succés');
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

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          if (this.screenWidth < 650) {
            this.width = 1;
          } else {
            this.width = 2;
          }
    }

  ngOnInit() {
  }

}
