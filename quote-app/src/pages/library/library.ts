import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quote.interface";

import quotes from '../../data/quotes';
import { Quotes } from "../quotes/quotes";
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Library page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit{

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage: Quotes;


  ngOnInit() {
    this.quoteCollection = quotes;
  }

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Library');
  // }

}
