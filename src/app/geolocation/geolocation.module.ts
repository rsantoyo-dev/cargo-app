import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GeolocationEffects } from '../store/geolocation/geolocation.effects';
import { GetAddressComponent } from './get-address/get-address.component';
import {StoreModule} from "@ngrx/store";
import {geolocationReducer} from "../store/geolocation/geolocation.reducer";



@NgModule({
    declarations: [
        GetAddressComponent
    ],
    exports: [
        GetAddressComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('geolocation', geolocationReducer),
        EffectsModule.forFeature([GeolocationEffects])
    ]
})
export class GeolocationModule { }
