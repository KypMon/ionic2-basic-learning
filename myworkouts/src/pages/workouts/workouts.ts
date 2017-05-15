import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from './../../app/services/workout.service';
import { WorkoutDetailsPage } from "../workout-details/workout-details";

@Component({
    selector: 'workouts',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {

    constructor(
        public navCtrl: NavController,
        private workoutService: WorkoutService
    ) { }

    ionViewWillEnter() {
        this.workoutService.getWorkOuts().subscribe(
            workouts => {
                this.workouts = workouts;
            }
        );
    }

    ngOnInit() {
        this.workoutService.getWorkOuts()
            .subscribe(workouts => {
                this.workouts = workouts;
            });
    }

    workouts: any;

    workoutSelected(event, workout) {
        this.navCtrl.push(WorkoutDetailsPage, {
            workout: workout
        });
    }

}
