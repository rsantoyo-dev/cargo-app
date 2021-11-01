import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {GeolocationModule} from "./geolocation/geolocation.module";
import {EffectsModule} from "@ngrx/effects";
import {geolocationReducer} from "./store/geolocation/geolocation.reducer";
import {GeolocationEffects} from "./store/geolocation/geolocation.effects";
import {ShippingModule} from "./shipping/shipping.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({geolocation: geolocationReducer}, {}),
    EffectsModule.forRoot([GeolocationEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    GeolocationModule,
    ShippingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
