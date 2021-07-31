import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api, Coordinate } from './interface';
import { ServisInputService } from './servis-input.service';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  api: Api = {
    key: '9a8017b89b754c65a83efd05420dcc01',
    base: 'https://api.opencagedata.com/geocode/v1/',
  };

  converGeo: Coordinate = {
    results: [
      {
        geometry: {
          lat: 50.4500336,
          lng: 30.5241361,
        },
      },
    ],
  };

  constructor(
    private serviceInput: ServisInputService,
    private http: HttpClient
  ) {}

  convertCity(): void {
    this.http
      .get(
        `${this.api.base}json?q=${this.serviceInput.city}&key=${this.api.key}`
      )
      .subscribe((data: Coordinate) => {
        (this.serviceInput.latitude = data.results[0].geometry.lat),
          (this.serviceInput.longitude = data.results[0].geometry.lng);
      });
  }
}
