import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';

import { Recipe } from './../../models/recipe';
import { RecipesService } from './../../services/recipes';
@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  node = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  recipe: Recipe;
  index: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private recipesService: RecipesService) {
  }

  ngOnInit() {
    this.node = this.navParams.get('node');
    if(this.node == 'Edit') {
      this.recipe = this.navParams.get('recipe');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
    console.log(this.recipeForm);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipe');
  }

  private initializeForm() {
    let title = null;
    let description = null;
    let difficulty = 'Medium';
    let ingredients = [];

    if(this.node === 'Edit') {
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      ingredients = this.recipe.ingredients;
      for(let ingredient of this.recipe.ingredients) {
        //trick to ensure the input is not empty
        ingredients.push(new FormControl(ingredient.name, Validators.required));
      }
    }

    this.recipeForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'difficulty': new FormControl(difficulty, Validators.required),
      'ingredients': new FormArray(ingredients)
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
    const value = this.recipeForm.value;
    let ingredients = [];
    if (value.ingredients.length > 0) {
      ingredients = value.ingredients.map(name => {
        return { name: name, amount: 1 };
      });
    }
    if(this.node == 'Edit'){
      this.recipesService.updateRecipe(this.index, 
      value.title,
      value.description,
      value.difficulty,
      ingredients);
    }
    this.recipesService.addRecipe(
      value.title,
      value.description,
      value.difficulty,
      ingredients);

    this.recipeForm.reset();
    this.navCtrl.popToRoot();
  }

  onManageIngredients() {
    console.log("this is the manage actionsheet");
    const actionSheet = this.actionSheetController.create({
      title: 'What dp you want to do',
      buttons: [
        {
          text: 'Add ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all the ingredient',
          role: 'destructive',
          handler: () => {
            const fArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
            const len = fArray.length;
            if (len > 0) {
              for (let i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
              }
              const toast = this.toastCtrl.create({
                message: 'All ingredient were removed',
                duration: 1000,
                position: 'bottom'
              });
              //remember to add present() function to show the component
              //present() function add on the result of the create({}) method
              toast.present();
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientAlert() {
    console.log("this is the alert add ingredient");
    return this.alertCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          //name
          name: 'name',
          placeholder: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            //name
            //if input is empty
            if (data.name.trim() == '' || data.name == null) {
              const toast = this.toastCtrl.create({
                message: 'Please enter a valid value',
                duration: 1000,
                position: 'bottom'
              });
              toast.present();
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients'))
              .push(new FormControl(data.name, Validators.required));
            const toast = this.toastCtrl.create({
              message: 'Item added',
              duration: 1000,
              position: 'bottom'
            });
            toast.present();
          }
        }
      ]
    });
  }

}
