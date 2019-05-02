import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientService } from 'src/app/shared/services/client.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CarteBonTypeService } from 'src/app/shared/services/carte-bon-type.service';
import { ReleveIndexService } from 'src/app/shared/services/releveIndex.service';
import { IndexService } from 'src/app/shared/services/index.service';

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
    private releveIndexService: ReleveIndexService,
    private indexService: IndexService,
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
    } else if (this.msg === 'relevé index') {
      this.deleteReleveIndex();
    } else if (this.msg === 'index') {
      this.deleteIndex();
    }
  }

  annuler(): void {
    this.dialogRef.close();
  }

  deleteReleveIndex(): void {
    this.releveIndexService.deleteReleveIndex(this.id).subscribe(res => {
      this.releveIndexService.getReleveIndexsList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
  }

  deleteIndex(): void {
    this.indexService.deleteIndex(this.id).subscribe(res => {
      this.indexService.getIndexList();
      this.dialogRef.close();
      this.notifService.success(`${this.msg} supprimé avec succés`);
    },
      err => {
        console.log(err);
      });
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
