import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { UserPage } from './user/user';

/**
 * Generated class for the Users page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(private navCtrl: NavController) {

  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, { userName: name });
  }

  ionViewCanEnter(): boolean | Promise<void> {
    console.log("ionViewCanEnter")
    const rnd = Math.random();
    return rnd > 0.1;
  }

  ionViewDidLoad() {
    console.log('IonviewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }



}
