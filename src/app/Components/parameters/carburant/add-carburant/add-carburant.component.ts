import { Component, OnInit, ViewChild } from '@angular/core';
import { Carburant } from 'app/shared/models/carburant';
import { MatSort, MatPaginator, MatDialogRef } from '@angular/material';
import { CarburantService } from 'app/shared/services/carburant.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-carburant',
  templateUrl: './add-carburant.component.html',
  styleUrls: ['./add-carburant.component.css']
})
export class AddCarburantComponent implements OnInit {

  public carburant: Carburant;
  public width: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dialogMat: MatDialogRef<AddCarburantComponent>,
    private carburantService: CarburantService,
    private notifService: NotificationService
  ) {
    this.carburant = new Carburant();
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

  addCarburant(): void {
    console.log(this.carburant);
    this.carburantService.addCarburant(this.carburant).subscribe(res => {
      this.carburantService.getCarburantsList();
      this.dialogMat.close();
      this.notifService.success('Carburant ajouter avec succés');
    },
      err => {
        console.log(err);
      });
  }
}
