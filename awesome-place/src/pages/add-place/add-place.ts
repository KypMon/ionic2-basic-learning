import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import { SetLocationPage } from './../set-location/set-location';
@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlace');
  }



  onSubmit(form: NgForm)  {
    console.log(form.value);
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage);
    modal.present();
  }

}
