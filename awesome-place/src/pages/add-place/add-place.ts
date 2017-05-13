import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

//feature for ionicnative3
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
    //feature for ionicnative3
    private geolocation: Geolocation,
    private camera: Camera,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
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
    const loader = this.loadingCtrl.create({
      content: 'Getting you location'
    });
    loader.present();
    //feature for ionicnative3
    this.geolocation.getCurrentPosition()
      .then(
      location => {
        loader.dismiss();
        console.log(location);
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;
      }
      )
      .catch(
      error => {
        loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Could not get your current location',
          duration: 2500
        });
        toast.present();
        console.log(error);
      }
      );
  }

  onTakePhoto() {
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })
    .then(
      imageData => {
        console.log(imageData);
      }
    )
    .catch(
      err => {
        console.log(err);
      }
    );
  }



}
