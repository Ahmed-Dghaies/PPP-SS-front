import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientService } from 'src/app/shared/services/client.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CarteBonTypeService } from 'src/app/shared/services/carte-bon-type.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  public id: string;
  public msg: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private clientService: ClientService,
    private cardTypeService: CarteBonTypeService,
    private notifService: NotificationService) {
    this.id = data.id;
    this.msg = data.msg;
  }

  ngOnInit() {
  }

  delete() {
    if (this.msg === 'client') {
      this.deleteClient();
    } else if (this.msg === 'type carte bon') {
      this.deleteCardType();
    }
  }

  annuler(): void {
    this.dialogRef.close();
  }

  deleteClient(): void {
    this.clientService.deleteClient(this.id).subscribe(res => {
      this.clientService.getClientsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteCardType(): void {
    this.cardTypeService.deleteCardType(this.id).subscribe(res => {
      this.cardTypeService.getCardTypesList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

}
