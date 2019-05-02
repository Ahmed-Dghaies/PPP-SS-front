import { Component, OnInit } from '@angular/core';
import { Index } from 'src/app/shared/models/Index.model';
import { MatDialogRef } from '@angular/material';
import { IndexService } from 'src/app/shared/services/index.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-index-add',
  templateUrl: './index-add.component.html',
  styleUrls: ['./index-add.component.css']
})
export class IndexAddComponent implements OnInit {

  public index: Index;
  public width: number;

  constructor(
    private dialogRef: MatDialogRef<IndexAddComponent>,
    private indexService: IndexService,
    private notifService: NotificationService) {
    this.index = new Index();
    this.width = 2;
  }

  addIndex() {
    const datetime = new Date();
    const date = datetime.toISOString().slice(0, 10);
    this.index.dernierDate = date;
    this.indexService.addIndex(this.index)
      .subscribe(
        res => {
          this.indexService.getIndexList();
          this.dialogRef.close();
          this.notifService.success('Index ajouter avec succés');
        },
        err => console.log(err)
      );
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
