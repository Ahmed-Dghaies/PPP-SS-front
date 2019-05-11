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
    const d = new Date(e);
    const date = (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear();
    this.eventService.getEvents(date);
  }

}
