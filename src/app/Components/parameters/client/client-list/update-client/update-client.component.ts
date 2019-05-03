import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Client } from 'app/shared/models/client.model';
import { NgForm } from '@angular/forms';
import { ClientService } from 'app/shared/services/client.service';
import { NotificationService } from 'app/shared/services/notification.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  public client: Client;
  public width: number;

  constructor(public dialogRef: MatDialogRef<UpdateClientComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private clientService: ClientService,
              private notifservice: NotificationService) {
    this.client = data.client;
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateClient(): void {
    this.clientService.updateClient(this.client._id, this.client).subscribe(res => {
      this.clientService.getClientsList();
      this.dialogRef.close();
      this.notifservice.success('Client modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
