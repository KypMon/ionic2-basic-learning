import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Users2Page } from './../users2/users2';
import { UsersPage } from './../users/users';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;
  usersPage2 = Users2Page;

  constructor(
    public navCtrl: NavController,
    private platform: Platform
  ) {
    //know the device
    console.log(this.platform.platforms());
    if (this.platform.is('ios')) {
      console.log("this is ios device");
    }

    //know the screen infomation
    console.log(this.platform);
    console.log(this.platform.isLandscape());
    console.log(this.platform.isPortrait());
    console.log(this.platform.height());
    console.log(this.platform.width());
  }



}
