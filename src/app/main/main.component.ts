import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConverterService } from '../servises/converter.service';
import { DailyServiceService } from '../servises/daily-service.service';
import { ServisInputService } from '../servises/servis-input.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  constructor(
    public inputService: ServisInputService,
    public dailyServise: DailyServiceService,
    public conver: ConverterService
  ) {}

  ngOnInit() {}
}
