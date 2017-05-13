import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from './../pages/place/place';
import { SetLocationPage } from './../pages/set-location/set-location';
import { AddPlacePage } from './../pages/add-place/add-place';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,
    SetLocationPage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //use for add the google map module
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVjYHMqjO6-04ENRcYQGMtj0gz2BGbSYU'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage,
    SetLocationPage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
