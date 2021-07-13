import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { weatherData } from '../main/main.component';
import { ServisInputService } from '../servises/servis-input.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public newCity: EventEmitter<weatherData> =
    new EventEmitter<weatherData>();
  constructor(public inputServic: ServisInputService) {}

  ngOnInit(): void {}

  setDate() {
    this.inputServic
      .makeInputDate()
      .subscribe((date: weatherData) => this.newCity.emit(date));
  }
}
