import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Ingredient } from './../../models/ingredient';
import { ShoppingListService } from './../../services/shopping-list';
import { AuthService } from './../../services/auth';
import { DatabaseOptionsPage } from '../database-options/database-options';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor(
    private slService: ShoppingListService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    console.log(form);
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }

  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create({
      content: "please wait"
    });
    const popover = this.popoverCtrl.create(DatabaseOptionsPage);
    popover.present({ ev: event });
    popover.onDidDismiss(
      data => {
        if (data.action == 'load') {
          loading.present();
          this.authService.getActiveUser().getToken()
            .then(
            (token: string) => {
              this.slService.fetchList(token)
                .subscribe(
                (list: Ingredient[]) => {
                  loading.dismiss();
                  console.log('Success');
                  if (list) {
                    this.listItems = list;
                  } else {
                    this.listItems = [];
                  }
                },
                error => {
                  loading.dismiss();
                  this.handleError(error.json().error);
                }
                );
            }
            );
        } else if (data.action == 'store') {
          loading.present();
          this.authService.getActiveUser().getToken()
            .then(
            (token: string) => {
              this.slService.storeList(token)
                .subscribe(
                () => {
                  loading.dismiss();
                  console.log('Success');
                },
                error => {
                  loading.dismiss();
                  this.handleError(error.json().error);
                }
                );
            }
            );
        }
      }
    );
  }

  private loadItems() {
    this.listItems = this.slService.getItems();
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'an Error occurred',
      message: errorMessage,
      buttons: ['OK']
    });
    alert.present();
  }


}
