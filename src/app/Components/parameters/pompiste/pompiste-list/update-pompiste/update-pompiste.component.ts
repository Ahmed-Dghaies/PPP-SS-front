import { Component, OnInit, Inject } from '@angular/core';
import { Pompiste } from 'app/shared/models/pompiste.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PompisteService } from 'app/shared/services/pompiste.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-pompiste',
  templateUrl: './update-pompiste.component.html',
  styleUrls: ['./update-pompiste.component.css']
})
export class UpdatePompisteComponent implements OnInit {

  public pompiste: Pompiste;

  constructor(public dialogRef: MatDialogRef<UpdatePompisteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private pompisteService: PompisteService,
              private notifservice: NotificationService) {
    this.pompiste = data.pompiste;
  }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updatePompiste(): void {
    this.pompisteService.updatePompiste(this.pompiste._id, this.pompiste).subscribe(res => {
      this.pompisteService.getpompistesList();
      this.dialogRef.close();
      this.notifservice.success('Pompiste modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
