import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

//feature for ionicnative3
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';


import { SetLocationPage } from './../set-location/set-location';
import { PlacesService } from './../../services/places';

import { Location } from './../../models/location';

declare var cordova: any;

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
    private file: File,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private placesService: PlacesService) {
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

  imageUrl = '';

  //Method
  onSubmit(form: NgForm) {
    this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
    form.reset();
    this.location = {
      lat: 40.7624324,
      lng: -73.9759827
    };
    this.imageUrl = '';
    this.locationIsSet = false;
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
        //replace all the slash and backSlash
        const currentName = imageData.replace(/^.*[\\\/]/, '');
        //replace the end of the path of slash 
        const path = imageData.replace(/[^\/]*$/, '');
        //fix the bug of the same file name
        const newFileName = new Date().getUTCMilliseconds() + '.jpg';
        //old path, old filename, new path, new filename
        this.file.moveFile(path, currentName, cordova.file.dataDirectory, newFileName)
          .then(
            (data: Entry) => {
              this.imageUrl = data.nativeURL;
              this.camera.cleanup();
              this.file.removeFile(path, currentName);
            }
          )
          .catch(
          (err: FileError) => {
            this.imageUrl = '';
            const toast = this.toastCtrl.create({
              message: 'Could not save the image. Please try again',
              duration: 2500
            });
            toast.present();
            this.camera.cleanup();
          }
          );
        this.imageUrl = imageData;
      }
      )
      .catch(
      err => {
        const toast = this.toastCtrl.create({
          message: 'Could not take the image. Please try again',
          duration: 2500
        });
        toast.present();
        console.log(err);
      }
      );
  }



}
