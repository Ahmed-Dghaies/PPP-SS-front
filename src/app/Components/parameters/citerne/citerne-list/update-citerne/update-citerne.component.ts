import { Component, OnInit, Inject } from '@angular/core';
import { Citerne } from 'app/shared/models/citerne.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CiterneService } from 'app/shared/services/citerne.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-citerne',
  templateUrl: './update-citerne.component.html',
  styleUrls: ['./update-citerne.component.css']
})
export class UpdateCiterneComponent implements OnInit {

  public citerne: Citerne;
  public width: number;

  constructor(
    public dialogRef: MatDialogRef<UpdateCiterneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private citerneService: CiterneService,
    private notifservice: NotificationService) {
    this.citerne = data.citerne;
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
    this.citerneService.updateCiterne(this.citerne._id, this.citerne).subscribe(res => {
      this.citerneService.getCiternesList();
      this.dialogRef.close();
      this.notifservice.success('Citerne modifié avec succés');
    },
      err => {
        console.log(err);
      });
  }


}
