import { Component, OnInit, Inject } from '@angular/core';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { NgForm } from '@angular/forms';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-steg-et-autres-edit',
  templateUrl: './steg-et-autres-edit.component.html',
  styleUrls: ['./steg-et-autres-edit.component.css']
})
export class StegEtAutresEditComponent implements OnInit {

  public stegEtAutre: StegEtAutre;
  public width: number;

  constructor(public dialogRef: MatDialogRef<StegEtAutresEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private stegEtAutreService: StegEtAutresService,
              private notifservice: NotificationService) {
    this.stegEtAutre = data.stegEtAutre;
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

  updateStegEtAutre(): void {
    this.stegEtAutreService.updateStegEtAutre(this.stegEtAutre._id, this.stegEtAutre).subscribe(res => {
      this.stegEtAutreService.getStegEtAutresList();
      this.dialogRef.close();
      this.notifservice.success('stegEtAutre modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }


}
