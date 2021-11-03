import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {Observable} from "rxjs";
import Distance = google.maps.Distance;
import {getRouteDistance} from "../../store/shipping/shipping.selectors";
import {shippinglocations} from "../../store/shipping/shipping.actions";
import {LoadSize} from "../model";

@Component({
  selector: 'app-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {
  routeDistance$: Observable<Distance | null>;
  loadSize$: Observable<LoadSize>;
  weight$: Observable<number>;

  constructor(private geoLocationStore: Store<ShippingState>) { }

  ngOnInit(): void {
    this.geoLocationStore.dispatch(shippinglocations())
    this.routeDistance$ = this.geoLocationStore.select(getRouteDistance);


  }

}
