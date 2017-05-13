import { Component, ViewChild } from '@angular/core';

import { Navbar, ViewController } from "ionic-angular";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})

export class UsersPage {
  //get access to the navbar
  @ViewChild(Navbar) navbar: Navbar

  //first way to change the text
  ionViewWillEnter() {
    // 1st way
    this.navbar.setBackButtonText('Home');
    // 2nd way
    this.viewCtrl.setBackButtonText('Home2');
  }

  //second way
  constructor(
    private viewCtrl: ViewController
  ) {

  }
}
