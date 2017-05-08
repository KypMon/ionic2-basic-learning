import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";
import { QuotesPage } from "../pages/quotes/quotes";
import { QuotePage } from "../pages/quote/quote";
import { SettingsPage } from "../pages/settings/settings";
import { TabsPage } from "../pages/tabs/tabs";
import { QuotesService } from "../services/quotes";
import { SettingsService } from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {
}
