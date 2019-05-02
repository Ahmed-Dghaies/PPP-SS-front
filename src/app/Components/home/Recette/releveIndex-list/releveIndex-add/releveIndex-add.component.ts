import { Component, OnInit, ViewChild } from '@angular/core';
import { ReleveIndex } from 'src/app/shared/models/ReleveIndex.model';
import { MatDialogRef, MatSort, MatPaginator } from '@angular/material';
import { ReleveIndexService } from 'src/app/shared/services/releveIndex.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { IndexService } from 'src/app/shared/services/index.service';

@Component({
  selector: 'app-releve-index-add',
  templateUrl: './releveIndex-add.component.html',
  styleUrls: ['./releveIndex-add.component.css']
})
export class ReleveIndexAddComponent implements OnInit {

  public releveIndex: ReleveIndex;
  public list: string[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<ReleveIndexAddComponent>,
    private releveIndexService: ReleveIndexService,
    private indexService: IndexService,
    private notifService: NotificationService) {
    this.list = ['13-G', '45-G'];
    this.releveIndex = new ReleveIndex();
    this.indexService.getIndexList();
    this.getNamesList();
  }

  addReleveIndex() {
    this.releveIndexService.addReleveIndex(this.releveIndex)
      .subscribe(
        res => {
          this.releveIndexService.getReleveIndexsList();
          this.dialogRef.close();
          this.notifService.success('relevé index ajouter avec succés');
        },
        err => console.log(err)
      );
  }

  getNamesList() {
    let i;
    for (i = 0; i < this.indexService.indexs.length; i++) {
      this.list.push(this.indexService.indexs[i].reference);
    }
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
