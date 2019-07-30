import { Component, OnInit, Inject } from '@angular/core';
import { ContreBon } from 'app/shared/models/contreBon';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-contre-bon-more-details',
  templateUrl: './contre-bon-more-details.component.html',
  styleUrls: ['./contre-bon-more-details.component.css']
})
export class ContreBonMoreDetailsComponent implements OnInit {

  public contreBon: ContreBon;

  constructor(public dialogRef: MatDialogRef<ContreBonMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.contreBon = data.contreBon;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
