import { Component } from '@angular/core';

import { ViewController } from "ionic-angular";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
                console.log("this is quote page")
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

//delete the page
//quit the modal by click the unfavorite button or other ways
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
