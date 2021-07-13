import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Api {
  key: string;
  base: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServisStaticService implements OnInit {
  api: Api = {
    key: '0ee44bc0e6f29b9f0279439752b45cc9',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  latitude: number;
  longitude: number;

  apiState;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getStartCoord() {
    navigator.geolocation.getCurrentPosition((position) => {
      (this.latitude = position.coords.latitude),
        (this.longitude = position.coords.longitude);
    });
  }

  makeStartDate(): Observable<any> {
    return this.http.get(
      `${this.api.base}weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${this.api.key}`
    );
  }
}
