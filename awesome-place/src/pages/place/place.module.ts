import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacePage } from './place';

import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    PlacePage,
  ],
  imports: [
    IonicPageModule.forChild(PlacePage),
    AgmCoreModule
  ],
  exports: [
    PlacePage
  ]
})
export class PlaceModule {}
