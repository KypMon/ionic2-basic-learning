import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { Geolocation } from '@ionic-native/geolocation';

import { SetLocationPage } from './../set-location/set-location';
import { Location } from './../../models/location';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlace');
  }

  //properties
  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };

  locationIsSet = false;

  //Method
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onOpenMap() {
    //this is to show the choose location page
    const modal = this.modalCtrl.create(SetLocationPage, {
      location: this.location,
      isSet: this.locationIsSet
    });
    modal.present();
    //if model dismiss...
    modal.onDidDismiss(
      // the data passed from the set location page
      data => {
        if (data) {
          //make the location information = the location set from the choose location page
          this.location = data.location;
          this.locationIsSet = true;
        }
      }
    );
  }

  onLocate() {
    this.geolocation.getCurrentPosition()
      .then(
        location => {
          console.log(location);
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
          this.locationIsSet = true;
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      );
  }



}
