import { createReducer, on } from '@ngrx/store';
import * as GeolocationActions from './geolocation.actions';

export const geolocationFeatureKey = 'geolocation';

export interface GeolocationState {
    value:number;
}

export const initialState: GeolocationState = {
  value:5

};


export const _geolocationReducer = createReducer<GeolocationState>(
  initialState,

  on(GeolocationActions.loadGeolocations, state => state),
  on(GeolocationActions.loadGeolocationsSuccess, (state, action) => state),
  on(GeolocationActions.loadGeolocationsFailure, (state, action) => state),

);

export function geolocationReducer(state:any, action:any) {
  return _geolocationReducer(state, action)
}

