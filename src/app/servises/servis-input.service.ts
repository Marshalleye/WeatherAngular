import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from '../main/main.component';
import { Api } from './servis-static.service';

@Injectable({
  providedIn: 'root',
})
export class ServisInputService {
  api: Api = {
    key: '0ee44bc0e6f29b9f0279439752b45cc9',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  city = '';

  constructor(private http: HttpClient) {}

  makeInputDate(): Observable<any> {
    return this.http.get(
      `${this.api.base}weather?q=${this.city}&units=metric&appid=${this.api.key}`
    );
  }
}
