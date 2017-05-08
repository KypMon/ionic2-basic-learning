import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Library } from './../pages/library/library';
import { Quote } from './../pages/quote/quote';
import { Quotes } from "../pages/quotes/quotes";
import { Settings } from './../pages/settings/settings';
import { Favorites } from './../pages/favorites/favorites';
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Library,
    Favorites,
    Quote,
    Quotes,
    Settings,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Library,
    Favorites,
    Quote,
    Quotes,
    Settings,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
