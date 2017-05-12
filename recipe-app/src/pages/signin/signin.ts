import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {

  constructor
  (public navCtrl: NavController, 
  public navParams: NavParams,
  private authService: AuthService,
  private loadingCtrl: LoadingController,
  private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signin');
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in ...'
    });
    this.authService.signin(form.value.email,form.value.password)
        .then(data => {
          loading.dismiss();
        })
        .catch(error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'Signin failed',
            message: error.message
          });
        });
  }

}
