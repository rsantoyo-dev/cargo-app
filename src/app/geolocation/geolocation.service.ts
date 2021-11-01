import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  apiURL = "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBJnLwSbajMWfKxvOn1kUxXfdCb5pYTAks";

  constructor(private http:HttpClient) { }

  /*getPlaces(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(error)
      );
  }*/

  getPlaces() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  }

}
