import { Component, OnInit, Inject } from '@angular/core';
import { ReleveIndex } from 'app/shared/models/ReleveIndex.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-releve-index-edit',
  templateUrl: './releveIndex-edit.component.html',
  styleUrls: ['./releveIndex-edit.component.css']
})
export class ReleveIndexEditComponent implements OnInit {

  public releveIndex: ReleveIndex;

  constructor(
    public dialogRef: MatDialogRef<ReleveIndexEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private releveIndexService: ReleveIndexService,
    private notifservice: NotificationService) {
    this.releveIndex = data.index;
  }

  updateReleveIndex(): void {
    this.releveIndexService.updateReleveIndex(this.releveIndex._id, this.releveIndex)
      .subscribe(res => {
        this.releveIndexService.getReleveIndexsList();
        this.dialogRef.close();
        this.notifservice.success('Relevé index modifié avec succés');
      },
        err => {
          console.log(err);
        });
  }

  onClose() {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  ngOnInit() {
  }

}
