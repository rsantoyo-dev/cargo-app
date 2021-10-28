import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as GeolocationActions from './geolocation.actions';
import {GeolocationService} from "../../geolocation/geolocation.service";



@Injectable()
export class GeolocationEffects {
  constructor(private actions$: Actions, private geolocationService: GeolocationService) {}


  loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GeolocationActions.loadGeolocations),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.geolocationService.getPlaces().pipe(
          map((data)=>GeolocationActions.loadGeolocationsSuccess({data})),
          catchError(error => of(GeolocationActions.loadGeolocationsFailure({error})))

        )
      )
    );
  });
}

/*
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {  EMPTY, of } from 'rxjs';

import * as GeolocationActions from './geolocation.actions';
import {GeolocationService} from "../../geolocation/geolocation.service";



@Injectable()
export class GeolocationEffects {
  constructor(private actions$: Actions, private geolocationService: GeolocationService) {
  }

  loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GeolocationActions.loadGeolocations),
      concatMap(() =>
        this.geolocationService.getPlaces().pipe(
          map((data)=>GeolocationActions.loadGeolocationsSuccess({data}))
        )


        this.userService.userActivationRequest(action.emailValidation, action.activatePassword)
          .pipe(
            map(() => UserApiActions.emailValidationSuccess()),
            catchError(error => of(UserApiActions.emailValidationFailure({error})))
          )
)
);
});





}
* */
