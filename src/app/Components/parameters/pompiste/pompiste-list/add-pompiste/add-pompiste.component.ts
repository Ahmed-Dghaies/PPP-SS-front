import { Component, OnInit } from '@angular/core';
import { Pompiste } from 'app/shared/models/pompiste.model';
import { MatDialogRef } from '@angular/material';
import { PompisteService } from 'app/shared/services/pompiste.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-pompiste',
  templateUrl: './add-pompiste.component.html',
  styleUrls: ['./add-pompiste.component.css']
})
export class AddPompisteComponent implements OnInit {

  public pompiste: Pompiste;

  constructor(private dialogMat: MatDialogRef<AddPompisteComponent>,
              private pompisteService: PompisteService,
              private notifService: NotificationService) {
    this.pompiste = new Pompiste();
  }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogMat.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  addPompiste(): void {
    this.pompisteService.addpompiste(this.pompiste).subscribe(res => {
      this.pompisteService.getpompistesList();
      this.dialogMat.close();
      this.notifService.success('Pompiste ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }


}
