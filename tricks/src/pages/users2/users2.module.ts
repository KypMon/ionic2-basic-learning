import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Users2Page } from './users2';

@NgModule({
  declarations: [
    Users2Page,
  ],
  imports: [
    IonicPageModule.forChild(Users2Page),
  ],
  exports: [
    Users2Page
  ]
})
export class Users2Module {}
