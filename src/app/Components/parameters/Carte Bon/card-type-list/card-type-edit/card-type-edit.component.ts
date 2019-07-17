import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { CarteBonTypeService } from '../../../../../shared/services/carte-bon-type.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CardType } from 'app/shared/models/cardType.model';
import { NotificationService } from 'app/shared/services/notification.service';
import { CarburantService } from 'app/shared/services/carburant.service';


@Component({
  selector: 'app-card-type-edit',
  templateUrl: './card-type-edit.component.html',
  styleUrls: ['./card-type-edit.component.css']
})
export class CardTypeEditComponent implements OnInit {

  public cardType: CardType;
  public width: number;
  public screenHeight: number;
  public screenWidth: number;

  constructor(
    public dialogRef: MatDialogRef<CardTypeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cardTypeService: CarteBonTypeService,
    private notifservice: NotificationService,
    public carburantService: CarburantService) {
    this.cardType = data.cardType;
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

  updateCardType(): void {
    this.cardTypeService.updateCardType(this.cardType._id, this.cardType)
      .subscribe(res => {
        this.cardTypeService.getCardTypesList();
        this.dialogRef.close();
        this.notifservice.success('Carte Bon type modifié avec succés');
      },
        err => {
          console.log(err);
        });
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
    this.carburantService.getCarburantsList();
    this.getScreenSize();
  }

}
