import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as ShippingActions from './shipping.actions';
import {ShippingService} from "../../shipping/shipping.service";

@Injectable()
export class ShippingEffects {

  constructor(private actions$: Actions, private shippingService: ShippingService) {
  }

  loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShippingActions.shippinglocations),
      mergeMap(() =>
        this.shippingService.getPlaces().pipe(
          map((shippingSettingsPerKilometer) => ShippingActions.loadShippingSuccess({shippingSettingsPerKilometer})),
          catchError(error => of(ShippingActions.loadShippingFailure({error})))
        )
      )
    );
  });




}
