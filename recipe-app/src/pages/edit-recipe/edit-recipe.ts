import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  node = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.node = this.navParams.get('node');
    this.initializeForm();
    console.log(this.recipeForm);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipe');
  }

  private initializeForm() {
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onManageIngredients() {
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
          role:'destructive',
          handler: () => {

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
            if(data.name.trim() == '' || data.name == null) {
              return; 
            }
            (<FormArray>this.recipeForm.get('ingredients'))
              .push(new FormControl(data.name, Validators.required));
          }
        }
      ]
    });
  }

}
