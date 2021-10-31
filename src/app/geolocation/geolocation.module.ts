import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {GeolocationEffects} from '../store/geolocation/geolocation.effects';
import {GetAddressComponent} from './get-address/get-address.component';
import {StoreModule} from "@ngrx/store";
import {geolocationReducer} from "../store/geolocation/geolocation.reducer";
import {HttpClientModule} from "@angular/common/http";
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
    HttpClientModule,
    StoreModule.forFeature('geolocation', geolocationReducer),
    EffectsModule.forFeature([GeolocationEffects])
  ]
})
export class GeolocationModule {
}
