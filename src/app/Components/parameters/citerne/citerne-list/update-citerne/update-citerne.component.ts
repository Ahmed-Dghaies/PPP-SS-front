import { Component, OnInit, Inject } from '@angular/core';
import { Citerne } from 'app/shared/models/citerne.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CiterneService } from 'app/shared/services/citerne.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { CarburantService } from 'app/shared/services/carburant.service';
import { IndexListComponent } from '@ComIndex/index-list.component';
import { IndexService } from 'app/shared/services/index.service';
import { Index } from 'app/shared/models/Index.model';

@Component({
  providers: [IndexListComponent],
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
    private indexService: IndexService,
    private notifservice: NotificationService,
    public carburantService: CarburantService,
    private comp: IndexListComponent) {
    this.citerne = data.citerne;
    this.width = 2;
  }

  ngOnInit() {
    if (document.body.clientWidth < 600) {
      this.width = 1;
    }
    this.carburantService.getCarburantsList();
  }
  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateCiterne(): void {
    this.citerneService.updateCiterne(this.citerne._id, this.citerne).subscribe(data => {
      this.citerneService.getCiternesList();
      this.indexService.getIndexByCiterne(this.citerne._id).subscribe(res => {
        if (res.length !== 0) {
          res.forEach((element: Index) => {
            element.carburant = this.citerne.carburant;
            this.indexService.updateIndex(element._id, element).subscribe(update => {
               this.comp.ngOnInit();
            });
          });
        }
      });
      this.dialogRef.close();
      this.notifservice.success('Citerne modifié avec succés');
    },
      err => {
        console.log(err);
      });

  }


}
