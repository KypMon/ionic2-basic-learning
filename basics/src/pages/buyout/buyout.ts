import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector:'page-buyout',
    templateUrl:'buyout.html'
})

export class BuyoutPage {

    productData: {name: string, quantity: number};

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController) {
        this.productData = this.navParams.data;
    }

    onConfirmPurchase() {
        this.navCtrl.popToRoot();
    }
}