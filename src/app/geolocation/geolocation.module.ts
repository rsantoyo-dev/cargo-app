import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {ShippingEffects} from '../store/shipping/shipping.effects';
import {GetAddressComponent} from './get-address/get-address.component';
import {StoreModule} from "@ngrx/store";
import {shippingReducer} from "../store/shipping/shipping.reducer";
import { PlaceAutoCompleteComponent } from './place-auto-complete/place-auto-complete.component';
import {MapViewComponent} from "./map-view/map-view.component";



@NgModule({
  declarations: [
    GetAddressComponent,
    PlaceAutoCompleteComponent,
    MapViewComponent
  ],
  exports: [
    GetAddressComponent,
    MapViewComponent
  ],
  imports: [

    CommonModule,
    StoreModule.forFeature('shipping', shippingReducer),
    EffectsModule.forFeature([ShippingEffects])

  ]
})
export class GeolocationModule {
}
