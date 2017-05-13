import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AddPlacePage } from './../add-place/add-place';
import { PlacePage } from './../place/place';
import { Place } from "../../models/place";
import { PlacesService } from './../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.placesService.fetchPlaces()
    .then(
      (places: Place[]) => this.places = places
    );
  }

  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }

  //properties
  addPlacePage = AddPlacePage;
  places: Place[];

  //methods
  onOpenPlace(place: Place, index: number) {
    const modal = this.modalCtrl.create(PlacePage, { place: place, index: index });
    modal.present();
  }

}
