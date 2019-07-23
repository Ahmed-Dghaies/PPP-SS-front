import { Component, OnInit, Inject } from '@angular/core';
import { Bank } from 'app/shared/models/bank';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bank-more-details',
  templateUrl: './bank-more-details.component.html',
  styleUrls: ['./bank-more-details.component.css']
})
export class BankMoreDetailsComponent implements OnInit {

  public bank: Bank;

  constructor(public dialogRef: MatDialogRef<BankMoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.bank = data.bank;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
