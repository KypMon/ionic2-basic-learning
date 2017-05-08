import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Favorites } from './favorites';

@NgModule({
  declarations: [
    Favorites,
  ],
  imports: [
    IonicPageModule.forChild(Favorites),
  ],
  exports: [
    Favorites
  ]
})
export class FavoritesModule {}
