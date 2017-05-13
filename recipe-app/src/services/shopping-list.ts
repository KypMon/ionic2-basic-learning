import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { AuthService } from './auth';
import { Ingredient } from './../models/ingredient';
@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [];

    constructor(
        private http: Http,
        private authService: AuthService
    ) {

    }
    addItem(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        console.log(this.ingredients);
    }

    addItems(items: Ingredient[]) {
        this.ingredients.push(...items);
    }

    getItems() {
        //create a real copy
        return this.ingredients.slice();
    }

    removeItem(index: number) {
        this.ingredients.splice(index, 1);
    }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    console.log(userId);
    return this.http
      .put('https://ionic2-recipe-84fda.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients)
      .map((response: Response) => {
        return response.json();
      });
  }
}