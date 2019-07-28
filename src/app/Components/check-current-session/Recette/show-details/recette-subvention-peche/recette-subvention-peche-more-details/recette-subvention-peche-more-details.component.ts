import { Component, OnInit, Inject } from '@angular/core';
import { SubventionPeche } from 'app/shared/models/subventionPeche';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recette-subvention-peche-more-details',
  templateUrl: './recette-subvention-peche-more-details.component.html',
  styleUrls: ['./recette-subvention-peche-more-details.component.css']
})
export class RecetteSubventionPecheMoreDetailsComponent implements OnInit {

  public subventionPeche: SubventionPeche;

  constructor(public dialogRef: MatDialogRef<RecetteSubventionPecheMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.subventionPeche = data.subventionPeche;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
