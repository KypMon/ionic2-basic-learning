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
}