import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Location } from './../../models/location';

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

  constructor
    (
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
    ) {
    console.log(this.navParams);
    //this method is to know the previous set location infomation
    this.location = this.navParams.get('location');
    //to show the previous choose the marker, when come back to the choose location page modal
    if (this.navParams.get('isSet')) {
      this.marker = this.location;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocation');
  }

  //properties
  location: Location;
  marker: Location;

  //methods
  onSetMarker(event: any) {
    console.log(event);
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

  onConfirm() {
    this.viewCtrl.dismiss({ location: this.marker });
  }

  onAbort() {
    this.viewCtrl.dismiss();
  }
}
