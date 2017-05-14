import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from './../../app/services/workout.service';

@Component({
    selector: 'workouts',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {

    constructor(
        public navCtrl: NavController,
        private workoutService: WorkoutService
    ) { }

    ngOnInit() {
        this.workoutService.getWorkOuts()
        .subscribe(workouts => {
            console.log(workouts);
        });
    }

}
