import { Injectable, Inject } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

Injectable()

export class WorkoutService {

    constructor( @Inject(Http) private http: Http) { }

    apiKey = '3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh';
    workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkout-ionic/collections/workouts';

    getWorkOuts() {
        return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
            .map(res => res.json());
    }

    addWorkoutPage(workout) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout),
            { headers: headers })
            .map(res => res.json());
    }

    deleteWorkout(workoutId) {
        return this.http.delete(this.workoutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
            .map(res => res.json());
    }


}