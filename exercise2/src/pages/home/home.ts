import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tapped = 0;
  pressed = 0;

  constructor(public navCtrl: NavController) {

  }

  onDidReset(resetType: string) {
    console.log(resetType);
    switch (resetType) {
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      case 'all':
        this.tapped = 0;
        this.pressed = 0;
        break;
    }
  }

  checkSuccess() {
    return this.tapped === 4 && this.pressed === 2;
  }

  onTap() {
    this.tapped++;
    this.checkSuccess();
  }

  onPress() {
    this.pressed++;
    this.checkSuccess();
  }

}
