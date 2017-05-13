import { ShoppingListService } from './../../services/shopping-list';
import { AuthService } from './../../services/auth';
import { RecipesService } from './../../services/recipes';
import { Component } from '@angular/core';
import { ViewController, PopoverController, AlertController, LoadingController } from "ionic-angular";
import { Ingredient } from "../../models/ingredient";

@Component({
    selector: 'page-sl-options',
    template: `
    <ion-grid text-center>
        <ion-row>
            <ion-col>
                <h3>Store & load</h3>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col>
                <button ion-button outline (click)="onAction('load')">Load list</button>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col>
                <button ion-button outline (click)="onAction('store')">Store list</button>
            </ion-col>
        </ion-row>
    </ion-grid>
    `
})

export class DatabaseOptionsPage {

    constructor(private viewCtrl: ViewController,
        private recipesService: RecipesService,
        private popoverCtrl: PopoverController,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private authService: AuthService,
        private slService: ShoppingListService
    ) {

    }

    onAction(action: string) {
        this.viewCtrl.dismiss({ action: action });
    }
}