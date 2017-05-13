import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';

import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    SetLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule
  ],
  exports: [
    SetLocationPage,
  ]
})
export class SetLocationModule {}
