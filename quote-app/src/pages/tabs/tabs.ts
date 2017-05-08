import { Component } from '@angular/core';

import { Favorites } from './../favorites/favorites';
import { Library } from './../library/library';

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs selectedIndex="1">
            <ion-tab [root]="Favorites" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="Library" tabTitle="LibraryPage" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    favoritePage = Favorites;
    libraryPage = Library;
}