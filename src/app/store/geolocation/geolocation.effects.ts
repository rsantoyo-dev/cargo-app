import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {  EMPTY, of } from 'rxjs';

import * as GeolocationActions from './geolocation.actions';



@Injectable()
export class GeolocationEffects {

  loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GeolocationActions.loadGeolocations),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => GeolocationActions.loadGeolocationsSuccess({ data })),
          catchError(error => of(GeolocationActions.loadGeolocationsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
