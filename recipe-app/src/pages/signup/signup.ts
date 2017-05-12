import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from './../../services/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  onSignup(form: NgForm) {
    console.log(form.value);
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertController.create({
          title: 'signup failed',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}
