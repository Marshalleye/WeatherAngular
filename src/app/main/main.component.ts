import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ServisInputService } from '../servises/servis-input.service';
import { ServisStaticService } from '../servises/servis-static.service';

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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  @Input() public takeNewData: weatherData;
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

  startDateTime: Date = new Date();
  constructor(
    private servisStatic: ServisStaticService,
    private inputService: ServisInputService
  ) {
    this.servisStatic.getStartCoord();
    console.log(this.takeNewData);
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.takeNewData);
    }, 600);

    setTimeout(() => {
      this.servisStatic.makeStartDate().subscribe((data: weatherData) => {
        this.startData = data;
        console.log(data);
      });
    }, 500);
  }
}
