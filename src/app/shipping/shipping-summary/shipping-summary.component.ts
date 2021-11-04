import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ShippingState} from "../../store/shipping/shipping.reducer";
import {Observable} from "rxjs";

import {getCost} from "../../store/shipping/shipping.selectors";

@Component({
  selector: 'app-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {

  cost$: Observable<number | null>;


  constructor(private shippingStore: Store<ShippingState>) { }

  ngOnInit(): void {

    this.cost$ = this.shippingStore.select(getCost);
  }

}
