import { Component, OnInit, Inject } from '@angular/core';
import { Index } from 'src/app/shared/models/Index.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IndexService } from 'src/app/shared/services/index.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index-edit',
  templateUrl: './index-edit.component.html',
  styleUrls: ['./index-edit.component.css']
})
export class IndexEditComponent implements OnInit {

  public index: Index;
  public width: number;

  constructor(
    public dialogRef: MatDialogRef<IndexEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private indexService: IndexService,
    private notifservice: NotificationService) {
    this.index = data.index;
    this.width = 2;
  }

  updateIndex(): void {
    this.indexService.updateIndex(this.index._id, this.index)
      .subscribe(res => {
        this.indexService.getIndexList();
        this.dialogRef.close();
        this.notifservice.success('Index modifié avec succés');
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
