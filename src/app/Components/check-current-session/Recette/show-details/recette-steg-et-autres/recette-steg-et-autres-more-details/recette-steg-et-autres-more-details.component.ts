import { Component, OnInit, Inject } from '@angular/core';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-recette-steg-et-autres-more-details',
  templateUrl: './recette-steg-et-autres-more-details.component.html',
  styleUrls: ['./recette-steg-et-autres-more-details.component.css']
})
export class RecetteStegEtAutresMoreDetailsComponent implements OnInit {

  public stegEtAutre: StegEtAutre;

  constructor(public dialogRef: MatDialogRef<RecetteStegEtAutresMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.stegEtAutre = data.stegEtAutre;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
