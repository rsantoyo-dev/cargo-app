import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {GeolocationModule} from "./geolocation/geolocation.module";
import {EffectsModule} from "@ngrx/effects";
import {shippingReducer} from "./store/shipping/shipping.reducer";
import {ShippingEffects} from "./store/shipping/shipping.effects";
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './shared/layout/layout.component';
import {NgxSjssModule} from "ngx-sjss";
import {ShippingModule} from "./shipping/shipping.module";






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({shipping: shippingReducer}, {}),
    EffectsModule.forRoot([ShippingEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    GeolocationModule,
    NgxSjssModule,
    ShippingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
