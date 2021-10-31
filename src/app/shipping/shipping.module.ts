import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { WeighDetailsComponent } from './weigh-details/weigh-details.component';
import { ShippingSummaryComponent } from './shipping-summary/shipping-summary.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PackageDetailsComponent,
    WeighDetailsComponent,
    ShippingSummaryComponent
  ],
  exports: [
    PackageDetailsComponent,
    WeighDetailsComponent,
    ShippingSummaryComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ShippingModule { }
