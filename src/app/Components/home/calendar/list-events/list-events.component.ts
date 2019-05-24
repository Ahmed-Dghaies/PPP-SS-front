import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/shared/services/event.service';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteComponent } from '@ComShared/confirm-delete/confirm-delete.component';
import { Event } from 'app/shared/models/event.model';
import { UpdateEventComponent } from './update-event/update-event.component';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  public displayedColumns: string[];

  public event: Event;

  constructor(public eventService: EventService,
              public matDialog: MatDialog) {
    this.displayedColumns = ['Date', 'Description', 'actions'];
    this.event = new Event();
   }

  ngOnInit() {
  }

  deleteEventDialog(event: Event): void {
    this.matDialog.open(ConfirmDeleteComponent, {
      data: { event, msg: 'Evenement' }
    });
  }

  addEvent(): void {
    this.event.date = this.event.date.toString().slice(4, 15).replace(/\s+/g, '-');
    this.eventService.addevent(this.event);
  }

  updateEventDialog(event: Event): void {
    this.matDialog.open(UpdateEventComponent, {
      panelClass: 'full-width-dialog',
      data: { event: Object.assign({}, event) }
    });
  }

}
