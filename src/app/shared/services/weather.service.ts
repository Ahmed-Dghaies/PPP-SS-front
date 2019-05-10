import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private uri = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Tunis,TN&' +
                  'appid=ebc55f582577e7d5e719553641f7dd5f';

  constructor(private http: HttpClient) {

  }

  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(this.uri);
  }
}
