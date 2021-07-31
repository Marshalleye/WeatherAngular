import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService } from './converter.service';
import { Api, bigWeatherData } from './interface';
import { ServisInputService } from './servis-input.service';

@Injectable({
  providedIn: 'root',
})
export class DailyServiceService {
  api: Api = {
    key: '0ee44bc0e6f29b9f0279439752b45cc9',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  hourlyData: bigWeatherData = {
    hourly: [
      {
        clouds: 8888,
        dew_point: 8888,
        dt: 8888,
        feels_like: 8888,
        humidity: 8888,
        pop: 8888,
        pressure: 8888,
        temp: 999,
        uvi: 999,
        visibility: 999,
        weather: [
          {
            description: 'gg',
            icon: 'gg',
            id: 999,
            main: 'gg',
          },
        ],
        wind_deg: 4,
        wind_gust: 4,
        wind_speed: 4,
      },
    ],
    lat: 4,
    lon: 4,
    minutely: [
      {
        dt: 4,
        precipitation: 4,
      },
    ],
    timezone: 'ff',
    timezone_offset: 4,
  };
  dailyData: bigWeatherData = {
    daily: [
      {
        clouds: 0,
        dew_point: 0,
        dt: 0,
        feels_like: {
          day: 0,
          eve: 0,
          morn: 0,
          night: 0,
        },
        humidity: 0,
        moon_phase: 0,
        moonrise: 0,
        moonset: 0,
        pop: 0,
        pressure: 0,
        sunrise: 0,
        sunset: 0,
        temp: {
          day: 0,
          eve: 0,
          max: 0,
          min: 0,
          morn: 0,
          night: 0,
        },
        uvi: 0,
        weather: [
          {
            description: '0',
            icon: '0',
            id: 0,
            main: '0',
          },
        ],
        wind_deg: 0,
        wind_gust: 0,
        wind_speed: 0,
      },
    ],
    lat: 4,
    lon: 4,
    minutely: [
      {
        dt: 4,
        precipitation: 4,
      },
    ],
    timezone: 'ff',
    timezone_offset: 4,
  };

  panelOpenState: boolean;
  startDate: Date = new Date();
  constructor(
    private http: HttpClient,
    private servisInput: ServisInputService,
    private convert: ConverterService
  ) {}

  makeHourlyDate(): void {
    this.http
      .get(
        `${this.api.base}onecall?lat=${this.servisInput.latitude}&lon=${
          this.servisInput.longitude
        }&lang=ua&exclude=daily&units=${
          this.servisInput.temperatureMode ? 'imperial' : 'metric'
        }&appid=${this.api.key}`
      )
      .subscribe((data: bigWeatherData) => (this.hourlyData = data));
  }

  makeDailyDate(): void {
    this.convert.convertCity();
    this.http
      .get(
        `${this.api.base}onecall?lat=${this.servisInput.latitude}&lon=${
          this.servisInput.longitude
        }&lang=ua&exclude=hourly&units=${
          this.servisInput.temperatureMode ? 'imperial' : 'metric'
        }&appid=${this.api.key}`
      )
      .subscribe((data: bigWeatherData) => (this.dailyData = data));
  }
}
