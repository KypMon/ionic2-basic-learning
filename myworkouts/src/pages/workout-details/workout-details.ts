import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import { WorkoutsPage } from './../workouts/workouts';

@Component({
    selector: 'workout-details',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    public workout: any;
    public result: any;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private workoutService: WorkoutService) {
        this.workout = this.navParams.get('workout');
    }

    deleteWorkout(workoutId) {
        this.workoutService.deleteWorkout(workoutId)
        .subscribe( data => {
            this.result = data;
        });

        this.navCtrl.push(WorkoutsPage);
    }

}
