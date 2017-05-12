import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RecipesService } from './../../services/recipes';
import { ShoppingListService } from './../../services/shopping-list';
import { EditRecipePage } from './../edit-recipe/edit-recipe';

import { Recipe } from './../../models/recipe';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit{
  recipe: Recipe;
  index: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private slService: ShoppingListService,
    private recipesService: RecipesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recipe');
  }

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {node: 'Edit', recipe: this.recipe, index: this.index });
  }

  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }

  onAddIngredients() {
    this.slService.addItems(this.recipe.ingredients);
  }

}
