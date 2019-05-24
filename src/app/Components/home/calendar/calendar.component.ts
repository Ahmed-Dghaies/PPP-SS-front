import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material';
import { EventService } from 'app/shared/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar') calendar: MatCalendar<any>;
  selectedDate: any;

  constructor(public eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents();
  }

  selectDay(e): void {
    const date = e.toString().slice(4, 15).replace(/\s+/g, '-');
    this.eventService.getEvents(date);
  }

}
