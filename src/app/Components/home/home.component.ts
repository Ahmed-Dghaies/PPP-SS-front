import { Component, OnInit, HostListener } from '@angular/core';
import { WeatherService } from 'app/shared/services/weather.service';
import { Weather } from 'app/shared/models/weather.model';
import { ReleveIndexService } from 'app/shared/services/releveIndex.service';
import { PompisteService } from 'app/shared/services/pompiste.service';

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
  public totalRevenue = 0;
  public quantiteCarburant = 0;
  public emps = 0;
  public month;

  constructor(public weatherService: WeatherService,
              public releveIndexService: ReleveIndexService,
              public pompisteService: PompisteService) {

  }


  ngOnInit() {
    this.weatherService.getWeather().subscribe(res => {
      this.weather = res;
      this.imgSrc = 'https://ppp-ss.herokuapp.com/event/weather-img/' + this.weather.weather[0].icon + '.png';
      this.temp = Math.round(this.weather.main.temp - 273);
      this.humidity = this.weather.main.humidity;
      const sunriseDate = new Date(this.weather.sys.sunrise * 1000);
      const sunsetDate = new Date(this.weather.sys.sunset * 1000);
      this.sunrise = sunriseDate.getHours() + ':' + sunriseDate.getMinutes();
      this.sunset = sunsetDate.getHours() + ':' + sunsetDate.getMinutes();

      this.month = new Date().toString().slice(4, 7);
      // get Totla Revenue
      this.releveIndexService.getTotlaRevenue().subscribe(
        result => {
          const key = 'total';
          this.totalRevenue = result[key];
        },
        err => {
          console.log(err);
        }
      );
      // get Quantite Carburant
      this.releveIndexService.getQuantiteCarburant().subscribe(result => {
        const key = 'quantite';
        this.quantiteCarburant = result[key];
      },
      err => {
        console.log(err);
      });
    },
    err => {
      console.log(err);
    });

    // get Total Employés
    this.pompisteService.getTotalPompiste().subscribe(res => {
      const key = 'total';
      this.emps = res[key];
    },
    err => {
      console.log(err);
    });

    // get pompiste for the current session
    this.releveIndexService.getSessionPompiste();
  }

}
