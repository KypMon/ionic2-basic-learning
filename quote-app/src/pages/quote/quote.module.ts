import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Quote } from './quote';

@NgModule({
  declarations: [
    Quote,
  ],
  imports: [
    IonicPageModule.forChild(Quote),
  ],
  exports: [
    Quote
  ]
})
export class QuoteModule {}
