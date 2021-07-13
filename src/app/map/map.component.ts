import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../servises/servis-static.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  apiMap: Api = {
    key: 'AIzaSyD2lQJw-YX6_gJ8tj7FlTvDp7F11XXt2fY',
    base: `https://maps.googleapis.com/maps/api/js?`,
  };
  title = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private http: HttpClient) {}
  ngOnInit() {}
}
