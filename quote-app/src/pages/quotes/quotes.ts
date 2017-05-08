import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string }

  constructor(private navParams: NavParams) { }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Quotes');
  // }

}
