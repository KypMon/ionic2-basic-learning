import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WeatherPage } from './../weather/weather';
import { WeatherService } from './../../app/services/weather.service';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getDefaultLocation();
  }

  results: any;
  searchStr: string;
  dafaultLocation: any;


  //methods
  getDefaultLocation() {
    if (localStorage.getItem('location') !== undefined) {
      this.dafaultLocation = JSON.parse(localStorage.getItem('location')).name;
    } else {
      this.dafaultLocation = '10001.11.99999';
    }
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(
      res => {
        this.results = res.RESULTS;
        console.log(res);
      }
      )
  }

  setDefaultLocation(location) {
    this.results = [];

    localStorage.setItem('location', JSON.stringify(location));
    this.searchStr = location.name;
    this.getDefaultLocation;
  }

  saveChanges() {
    this.navCtrl.push(WeatherPage);
  }
}
