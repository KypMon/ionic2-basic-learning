import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Library } from './library';

@NgModule({
  declarations: [
    Library,
  ],
  imports: [
    IonicPageModule.forChild(Library),
  ],
  exports: [
    Library
  ]
})
export class LibraryModule {}
