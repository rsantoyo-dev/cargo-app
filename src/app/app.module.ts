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
import {ShippingModule} from "./shipping/shipping.module";
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './shared/layout/layout.component';
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import { SuperDivComponent } from './styling/super-div/super-div.component';
import {StylingModule} from "./styling/styling.module";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SuperDivComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({shipping: shippingReducer}, {}),
    EffectsModule.forRoot([ShippingEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    GeolocationModule,
    ShippingModule,
    FlexModule,
    ExtendedModule,
    StylingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
