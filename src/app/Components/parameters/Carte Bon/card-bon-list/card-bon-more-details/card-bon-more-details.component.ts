import { Component, OnInit, Inject } from '@angular/core';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-card-bon-more-details',
  templateUrl: './card-bon-more-details.component.html',
  styleUrls: ['./card-bon-more-details.component.css']
})
export class CardBonMoreDetailsComponent implements OnInit {

  public carteBon: CarteBon;

  constructor(public dialogRef: MatDialogRef<CardBonMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.carteBon = data.carteBon;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
