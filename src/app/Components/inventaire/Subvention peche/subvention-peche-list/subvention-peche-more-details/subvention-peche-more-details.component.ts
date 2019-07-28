import { Component, OnInit, Inject } from '@angular/core';
import { SubventionPeche } from 'app/shared/models/subventionPeche';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-subvention-peche-more-details',
  templateUrl: './subvention-peche-more-details.component.html',
  styleUrls: ['./subvention-peche-more-details.component.css']
})
export class SubventionPecheMoreDetailsComponent implements OnInit {

  public subventionPeche: SubventionPeche;

  constructor(public dialogRef: MatDialogRef<SubventionPecheMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.subventionPeche = data.subventionPeche;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
