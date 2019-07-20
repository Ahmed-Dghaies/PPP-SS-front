import { Component, OnInit, Inject } from '@angular/core';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-steg-et-autres-more-details',
  templateUrl: './steg-et-autres-more-details.component.html',
  styleUrls: ['./steg-et-autres-more-details.component.css']
})
export class StegEtAutresMoreDetailsComponent implements OnInit {

  public stegEtAutre: StegEtAutre;

  constructor(public dialogRef: MatDialogRef<StegEtAutresMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.stegEtAutre = data.stegEtAutre;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
