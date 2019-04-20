import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {

  public client: Client;

  constructor(public dialogRef: MatDialogRef<MoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.client = data.client;
     }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
