import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'app/shared/services/notification.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Distributeur } from 'app/shared/models/distributeur.model';
import { DistributeurService } from 'app/shared/services/distributeur.service';

@Component({
  selector: 'app-distributeur-edit',
  templateUrl: './distributeur-edit.component.html',
  styleUrls: ['./distributeur-edit.component.css']
})
export class DistributeurEditComponent implements OnInit {

  public distributeur: Distributeur;
  public width: number;
  screenHeight: any;
  screenWidth: any;

  constructor(
    public dialogRef: MatDialogRef<DistributeurEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private distributeurService: DistributeurService,
    private notifservice: NotificationService) {
    this.distributeur = data.distributeur;
    this.getScreenSize();
  }

  updateDistributeur(): void {
    this.distributeurService.updateDistributeur(this.distributeur._id, this.distributeur)
      .subscribe(res => {
        this.distributeurService.getDistributeursList();
        this.dialogRef.close();
        this.notifservice.success('Distributeur modifié avec succés');
      },
        err => {
          console.log(err);
        });
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


  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
  }

}
