import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {Observable} from "rxjs";
import Distance = google.maps.Distance;
import {getRouteDistance} from "../../store/shipping/shipping.selectors";
import {shippinglocations} from "../../store/shipping/shipping.actions";

@Component({
  selector: 'app-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {
  routeDistance$: Observable<Distance | null>;
  constructor(private geoLocationStore: Store<ShippingState>) { }

  ngOnInit(): void {
    this.routeDistance$ = this.geoLocationStore.select(getRouteDistance);
    this.geoLocationStore.dispatch(shippinglocations())

  }

}
