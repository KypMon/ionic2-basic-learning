import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { RecipePage } from './../recipe/recipe';
import { RecipesService } from './../../services/recipes';
import { Recipe } from './../../models/recipe';

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[];

  onNewRecipe(){
    this.navCtrl.push(EditRecipePage, {node: 'New'});
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, {recipe: recipe, index: index})
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private recipesService: RecipesService) {
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recipes');
  }

}
