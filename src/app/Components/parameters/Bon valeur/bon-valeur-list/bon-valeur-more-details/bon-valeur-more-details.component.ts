import { Component, OnInit, Inject } from '@angular/core';
import { BonValeur } from 'app/shared/models/bonValeur.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bon-valeur-more-details',
  templateUrl: './bon-valeur-more-details.component.html',
  styleUrls: ['./bon-valeur-more-details.component.css']
})
export class BonValeurMoreDetailsComponent implements OnInit {

  public bonValeur: BonValeur;

  constructor(public dialogRef: MatDialogRef<BonValeurMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.bonValeur = data.bonValeur;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
