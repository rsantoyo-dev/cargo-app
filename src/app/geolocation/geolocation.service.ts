import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  //TODO: dynamic key & api
  apiURL = "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBJnLwSbajMWfKxvOn1kUxXfdCb5pYTAks";

  constructor(private http: HttpClient) { }

  /*getPlaces(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(error)
      );
  }*/

  getPlaces() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }

}
