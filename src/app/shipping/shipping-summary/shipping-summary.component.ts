import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GeolocationState} from "../../store/geolocation/geolocation.reducer";
import {Observable} from "rxjs";
import Distance = google.maps.Distance;
import {getRouteDistance} from "../../store/geolocation/geolocation.selectors";
import {loadGeolocations} from "../../store/geolocation/geolocation.actions";

@Component({
  selector: 'app-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {
  routeDistance$: Observable<Distance | null>;
  constructor(private geoLocationStore: Store<GeolocationState>) { }

  ngOnInit(): void {
    this.routeDistance$ = this.geoLocationStore.select(getRouteDistance);
    this.geoLocationStore.dispatch(loadGeolocations())

  }

}
