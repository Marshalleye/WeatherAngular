import { Component, EventEmitter, Input, Output } from '@angular/core';
import { weatherData } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newData: weatherData;

  updateWeather($event) {
    this.newData = $event;
  }
}
