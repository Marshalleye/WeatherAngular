import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './interface';

export interface weatherData {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  visibility: number;
  weather: [{ description: string; icon: string; main: string }];
  wind: { speed: number };
}

@Injectable({
  providedIn: 'root',
})
export class ServisInputService {
  api: Api = {
    key: '0ee44bc0e6f29b9f0279439752b45cc9',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  latitude: number;
  longitude: number;

  DateTime: Date = new Date();

  city = '';

  temperatureMode = false;

  startData: weatherData = {
    main: {
      feels_like: 26.04,
      humidity: 57,
      pressure: 1016,
      temp: 26.04,
      temp_max: 26.04,
      temp_min: 26.04,
    },
    name: 'Ivano-Frankivsk',
    visibility: 9000,
    weather: [{ description: 'clear sky', icon: '02n', main: 'Clear' }],
    wind: { speed: 1 },
  };

  constructor(private http: HttpClient) {
    this.getStartCoord();
    setTimeout(() => {
      this.makeStartDate();
    }, 300);
  }

  getStartCoord() {
    navigator.geolocation.getCurrentPosition((position) => {
      (this.latitude = position.coords.latitude),
        (this.longitude = position.coords.longitude);
    });
  }

  makeStartDate(): void {
    this.http
      .get(
        `${this.api.base}weather?lat=${this.latitude}&lon=${
          this.longitude
        }&units=${this.temperatureMode ? 'imperial' : 'metric'}&appid=${
          this.api.key
        }`
      )
      .subscribe((startObj: weatherData) => (this.startData = startObj));
  }

  makeNowDate(): void {
    this.http
      .get(
        `${this.api.base}weather?q=${this.city}&units=${
          this.temperatureMode ? 'imperial' : 'metric'
        }&appid=${this.api.key}`
      )
      .subscribe((data: weatherData) => (this.startData = data));
  }
}
