import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GeolocationService} from "../../geolocation/geolocation.service";

import * as GeolocationActions from './geolocation.actions';

@Injectable()
export class GeolocationEffects {


  loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeolocationActions.loadGeolocations),
      mergeMap(() =>

        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.geolocationService.getPlaces().pipe(
          map((data) => GeolocationActions.loadGeolocationsSuccess({data})),
          catchError(error => of(GeolocationActions.loadGeolocationsFailure({error})))
        )
      )
    );
  });

  constructor(private actions$: Actions, private geolocationService: GeolocationService) {
  }


}
