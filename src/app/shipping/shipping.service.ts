import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShippingSettingsPerKilometer} from "./model";
import {Observable, of, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  //TODO: set url in environment variable
  apiURL = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getPlaces(): Observable<ShippingSettingsPerKilometer> {
    return this.http.get<string>
    (this.apiURL + 'shippingSettingsPerKilometer').pipe(
      tap(data => JSON.stringify(data)),
      catchError((error) => of(error))
    );
  }

}
