import { Component, OnInit, HostListener } from '@angular/core';
import { WeatherService } from 'app/shared/services/weather.service';
import { Weather } from 'app/shared/models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public weather: Weather;
  public imgSrc = '';
  public temp: number;
  public humidity: number;
  public sunrise = '';
  public sunset = '';

  constructor(public weatherService: WeatherService) {

  }


  ngOnInit() {
    this.weatherService.getWeather().subscribe(res => {
      this.weather = res;
      this.imgSrc = '../../../assets/images/'+this.weather.weather[0].icon+'.png';
      this.temp = Math.round(this.weather.main.temp - 273);
      this.humidity = this.weather.main.humidity;
      const sunrise_date = new Date(this.weather.sys.sunrise*1000);
      const sunset_date = new Date(this.weather.sys.sunset*1000);
      this.sunrise = sunrise_date.getHours()+':'+sunrise_date.getMinutes();
      this.sunset = sunset_date.getHours() + ':' + sunset_date.getMinutes();
    },
    err => {
      console.log(err);
    })
  }

}
