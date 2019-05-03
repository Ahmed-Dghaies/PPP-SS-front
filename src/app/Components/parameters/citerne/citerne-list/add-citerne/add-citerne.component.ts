import { Component, OnInit } from '@angular/core';
import { Citerne } from 'app/shared/models/citerne.model';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'app/shared/services/notification.service';
import { CiterneService } from 'app/shared/services/citerne.service';



@Component({
  selector: 'app-add-citerne',
  templateUrl: './add-citerne.component.html',
  styleUrls: ['./add-citerne.component.css']
})
export class AddCiterneComponent implements OnInit {


  public citerne: Citerne;
  public width: number;

  constructor(
    private dialogMat: MatDialogRef<AddCiterneComponent>,
    private citerneService: CiterneService,
    private notifService: NotificationService) {
    this.citerne = new Citerne();
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
  }
  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addCiterne(): void {
    this.citerne.contenu = 0;
    console.log(this.citerne);
    this.citerneService.addCiterne(this.citerne).subscribe(res => {
      this.citerneService.getCiternesList();
      this.dialogMat.close();
      this.notifService.success('Citerne ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }

}
