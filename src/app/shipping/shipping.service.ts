import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  //TODO: set url in environment variable
  apiURL = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getPlaces() {
    return this.http.get(this.apiURL+'shippingSettingsPerKilometer');
  }
}
