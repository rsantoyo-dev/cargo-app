import { createAction, props } from '@ngrx/store';
import PlaceResult = google.maps.places.PlaceResult;

//API ACTIONS
export const loadGeolocations = createAction(
  '[Geolocation] Load Geolocations'
);

export const loadGeolocationsSuccess = createAction(
  '[Geolocation] Load Geolocations Success',
  props<{ data: any }>()
);

export const loadGeolocationsFailure = createAction(
  '[Geolocation] Load Geolocations Failure',
  props<{ error: any }>()
);

//PAGE ACTIONS
export const setPlaceResult = createAction(
  '[Geolocation] Add Address',
    props<{ placeResult: PlaceResult }>()
);

