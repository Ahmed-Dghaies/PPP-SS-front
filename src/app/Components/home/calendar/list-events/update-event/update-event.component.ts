import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService } from 'app/shared/services/event.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { NgForm } from '@angular/forms';
import { Event } from 'app/shared/models/event.model';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  public event: Event;

  constructor(public dialogRef: MatDialogRef<UpdateEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private eventService: EventService,
              private notifservice: NotificationService) {
    this.event = data.event;
  }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onClear(form: NgForm): void {
    form.reset();
  }

  updateEvent(): void {
    this.eventService.updateEvent(this.event).subscribe(res => {
      this.eventService.getEvents(this.event.date.toString());
      this.notifservice.success('Evénement modifié');
      this.dialogRef.close();
    },
      err => {
        console.log(err);
        this.notifservice.warn('Erreur');
      });
  }

}
