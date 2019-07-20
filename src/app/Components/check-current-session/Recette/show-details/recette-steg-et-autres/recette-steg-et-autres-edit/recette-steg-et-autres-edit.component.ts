import { Component, OnInit, Inject } from '@angular/core';
import { StegEtAutre } from 'app/shared/models/StegEtAutre.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StegEtAutresService } from 'app/shared/services/steg-et-autres.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recette-steg-et-autres-edit',
  templateUrl: './recette-steg-et-autres-edit.component.html',
  styleUrls: ['./recette-steg-et-autres-edit.component.css']
})
export class RecetteStegEtAutresEditComponent implements OnInit {

  public stegEtAutre: StegEtAutre;
  public width: number;

  constructor(public dialogRef: MatDialogRef<RecetteStegEtAutresEditComponent>,
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
      this.notifservice.success('Bon modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
