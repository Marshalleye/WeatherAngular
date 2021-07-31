import { Component } from '@angular/core';
import { weatherData } from './servises/servis-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newData: weatherData;

  updateWeather(event) {
    this.newData = event;
  }
}
