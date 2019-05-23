import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Citerne } from 'app/shared/models/citerne.model';

@Component({
  selector: 'app-more-citerne-details',
  templateUrl: './more-citerne-details.component.html',
  styleUrls: ['./more-citerne-details.component.css']
})
export class MoreCiterneDetailsComponent implements OnInit {

  public citerne: Citerne;
  constructor(public dialogRef: MatDialogRef<MoreCiterneDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.citerne = data.citerne;
              }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
