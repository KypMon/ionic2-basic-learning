import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class WeatherService {
    constructor(
        private http: Http,
    ) {
    }

    apiKey = 'a3b7d599daeded37';
    conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
    //preivous one no access-control
    // searchUrl = 'http://autocomplete.wunderground.com/aq?query=';
    //new one
    searchUrl = 'http://localhost:8100/search/aq?query=';



    //method
    getWeather(zmw) {
        return this.http.get(this.conditionsUrl + '/zmw:' + zmw+ '.json')
            .map(res => res.json());
    }

    searchCities(searchStr) {
        return this.http.get(this.searchUrl + '' + searchStr)
            .map(res => res.json());
    }
}