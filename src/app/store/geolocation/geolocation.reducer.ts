import { createReducer, on } from '@ngrx/store';
import * as GeolocationActions from './geolocation.actions';

export const geolocationFeatureKey = 'geolocation';

export interface GeolocationState {
    value:number;
    data:any;
}

export const initialState: GeolocationState = {
  value:5,
  data:{}

};


export const _geolocationReducer = createReducer<GeolocationState>(
  initialState,

  on(GeolocationActions.loadGeolocations, state => state),

  on(GeolocationActions.loadGeolocationsSuccess, (state, action): GeolocationState => {
    return {...state, data:action.data}
  }),

  on(GeolocationActions.loadGeolocationsFailure, (state) => state),

);

export function geolocationReducer(state:any, action:any) {
  return _geolocationReducer(state, action)
}

