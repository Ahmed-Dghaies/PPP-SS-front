import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/shared/services/client.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  public client: Client;
  public width: number;

  constructor(private dialogMat: MatDialogRef<AddClientComponent>,
              private clientService: ClientService,
              private notifService: NotificationService) {
    this.client = new Client();
    this.width = 2;
  }

  ngOnInit() {
    if ( document.body.clientWidth < 600 ) {
      this.width = 1;
    }
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addClient(): void {
    this.clientService.addClient(this.client).subscribe(res => {
      this.clientService.getClientsList();
      this.dialogMat.close();
      this.notifService.success('Client ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }


}
