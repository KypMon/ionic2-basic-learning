import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';

import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    AddPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),
    AgmCoreModule
  ],
  exports: [
    AddPlacePage
  ]
})
export class AddPlaceModule {}
