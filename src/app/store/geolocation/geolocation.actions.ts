import { createAction, props } from '@ngrx/store';

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