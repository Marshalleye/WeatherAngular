import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Api } from '../servises/interface';

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
  constructor(private http: HttpClient) {}
  ngOnInit() {}
}
