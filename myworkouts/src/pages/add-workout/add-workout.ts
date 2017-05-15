import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutsPage } from './../workouts/workouts';
import { WorkoutService } from './../../app/services/workout.service';
@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  constructor(
    public navCtrl: NavController,
    private workoutService: WorkoutService) { }

  title: string;
  note: string;
  type: string
  result: any;

  onSubmit() {
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    this.workoutService.addWorkoutPage(workout)
      .subscribe(
        data => {
          this.result = data;
        }
      );

    this.navCtrl.push(WorkoutsPage);
  }



}
