import { Component, OnInit, Inject } from '@angular/core';
import { Cheque } from 'app/shared/models/Cheque.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-recette-cheque-more-details',
  templateUrl: './recette-cheque-more-details.component.html',
  styleUrls: ['./recette-cheque-more-details.component.css']
})
export class RecetteChequeMoreDetailsComponent implements OnInit {

  public cheque: Cheque;

  constructor(public dialogRef: MatDialogRef<RecetteChequeMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.cheque = data.cheque;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
