import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {Observable} from "rxjs";
import Distance = google.maps.Distance;
import {getLoadSize, getRouteDistance, getWeight} from "../../store/shipping/shipping.selectors";
import {shippinglocations} from "../../store/shipping/shipping.actions";
import {LoadSize} from "../model";

@Component({
  selector: 'app-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {
  routeDistance$: Observable<Distance | null>;
  loadSize$: Observable<LoadSize| null>;
  weight$: Observable<number| null>;

  constructor(private geoLocationStore: Store<ShippingState>) { }

  ngOnInit(): void {
    this.geoLocationStore.dispatch(shippinglocations())
    this.routeDistance$ = this.geoLocationStore.select(getRouteDistance);
    this.loadSize$ = this.geoLocationStore.select(getLoadSize);
    this.weight$ = this.geoLocationStore.select(getWeight);
  }

}
