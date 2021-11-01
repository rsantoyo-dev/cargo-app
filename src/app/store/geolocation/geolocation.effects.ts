import { Injectable } from '@angular/core';
import { Actions} from '@ngrx/effects';

import {GeolocationService} from "../../geolocation/geolocation.service";



@Injectable()
export class GeolocationEffects {
  constructor(private actions$: Actions, private geolocationService: GeolocationService) {}


  /*loadGeolocations$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GeolocationActions.loadGeolocations),
      concatMap(() =>
        /!** An EMPTY observable only emits completion. Replace with your own observable API request *!/
        this.geolocationService.getPlaces().pipe(
          map((data)=>GeolocationActions.loadGeolocationsSuccess({data})),
          catchError(error => of(GeolocationActions.loadGeolocationsFailure({error})))

        )
      )
    );
  });*/
}
