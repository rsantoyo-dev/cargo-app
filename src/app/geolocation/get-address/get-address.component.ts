import {AfterViewInit, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {GeolocationState} from "../../store/geolocation/geolocation.reducer";
import {Observable} from "rxjs";
import {getMarkers, getValue} from "../../store/geolocation/geolocation.selectors";
import {updatePlaceByIndex} from "../../store/geolocation/geolocation.actions";
import PlaceResult = google.maps.places.PlaceResult;
import Marker = google.maps.Marker;


@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.scss']
})
export class GetAddressComponent implements AfterViewInit {

  value$: Observable<number | null>;
  markers$: Observable<Array<Marker> | null>;

  directionsRenderer: any;

  constructor(private store: Store<GeolocationState>) {
    this.value$ = this.store.select(getValue);
    this.markers$ = this.store.select(getMarkers);
  }

  ngAfterViewInit(): void {
    // this.store.dispatch(loadGeolocations())
    this.directionsRenderer = new google.maps.DirectionsRenderer();

  }

  departureAddress(placeResult: PlaceResult) {
    this.store.dispatch(updatePlaceByIndex({placeResult, index:0}))
  }
  arrivalAddress(placeResult: PlaceResult) {
    this.store.dispatch(updatePlaceByIndex({placeResult, index:1}))
  }

}
