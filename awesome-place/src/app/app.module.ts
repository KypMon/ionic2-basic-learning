import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from 'angular2-google-maps/core';
//feature for ionicnative3
import { IonicStorageModule } from '@ionic/storage'
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from './../pages/place/place';
import { SetLocationPage } from './../pages/set-location/set-location';
import { AddPlacePage } from './../pages/add-place/add-place';
import { PlacesService } from './../services/places';

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
    }),
    IonicStorageModule.forRoot()
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
    //feature for ionicnative3
    Geolocation,
    Camera, 
    File,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PlacesService
  ]
})
export class AppModule { }
