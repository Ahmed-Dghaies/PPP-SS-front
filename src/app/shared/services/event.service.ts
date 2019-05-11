import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private uri = 'https://ppp-ss.herokuapp.com/event';

  public events: Event[];

  constructor(private http: HttpClient,
              private notiService: NotificationService) {
    this.events = [];
  }

  getEvents(d?: string): void {
    const now = new Date();
    let date = (now.getMonth() + 1) + '-' + now.getDate() + '-' + now.getFullYear();

    if (d) {
      date = d;
    }

    this.http.get(`${this.uri}/list/byDate?date=${date}`).subscribe(res => {
      const key = 'events';
      this.events = res[key].map(e => {
        const eventDate =  new Date(e.date);
        e.date = (eventDate.getMonth() + 1) + '-' + eventDate.getDate() + '-' + eventDate.getFullYear();
        return e;
      });
    },
    err => {
      console.log(err);
    });
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }

  addevent(event: Event): void {
    const request = {
      event
    };
    this.http.post(`${this.uri}/add`, request).subscribe(res => {
      this.getEvents();
      this.notiService.success('Evénement ajouté');
    },
    err => {
      console.log(err);
      this.notiService.warn('Erreur');
    });
  }

  updateEvent(event: Event): Observable<any> {
    const request = {
      event
    };

    return this.http.put(`${this.uri}/update/${event._id}`, request);
  }
}
