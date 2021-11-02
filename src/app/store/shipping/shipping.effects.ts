import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GeolocationService} from "../../geolocation/geolocation.service";

import * as ShippingActions from './shipping.actions';

@Injectable()
export class ShippingEffects {


  loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShippingActions.shippinglocations),
      mergeMap(() =>

        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.geolocationService.getPlaces().pipe(
          map((data) => ShippingActions.loadShippingSuccess({data})),
          catchError(error => of(ShippingActions.loadShippingFailure({error})))
        )
      )
    );
  });

  constructor(private actions$: Actions, private geolocationService: GeolocationService) {
  }


}
