import { Component, OnInit, Inject } from '@angular/core';
import { CarteBon } from 'app/shared/models/carteBon.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recette-carte-bon-more-details',
  templateUrl: './recette-carte-bon-more-details.component.html',
  styleUrls: ['./recette-carte-bon-more-details.component.css']
})
export class RecetteCarteBonMoreDetailsComponent implements OnInit {

  public carteBon: CarteBon;

  constructor(public dialogRef: MatDialogRef<RecetteCarteBonMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.carteBon = data.carteBon;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
