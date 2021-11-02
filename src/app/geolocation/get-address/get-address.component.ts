import {AfterViewInit, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {Observable} from "rxjs";
import { getPlacesResults} from "../../store/shipping/shipping.selectors";
import {updatePlaceByIndex} from "../../store/shipping/shipping.actions";
import PlaceResult = google.maps.places.PlaceResult;


@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.scss']
})
//this class gets the 2 addresses and update info to redux
export class GetAddressComponent implements AfterViewInit {

  placesResults$: Observable<Array<PlaceResult> | null>;

  directionsRenderer: any;

  constructor(private store: Store<ShippingState>) {
    this.placesResults$ = this.store.select(getPlacesResults);
  }

  ngAfterViewInit(): void {
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

  departureAddress(placeResult: PlaceResult) {
    this.store.dispatch(updatePlaceByIndex({placeResult, index:0}))
  }
  arrivalAddress(placeResult: PlaceResult) {
    this.store.dispatch(updatePlaceByIndex({placeResult, index:1}))
  }

}
