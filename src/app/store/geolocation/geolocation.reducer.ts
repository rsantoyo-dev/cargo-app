import {createReducer, on} from '@ngrx/store';
import * as GeolocationActions from './geolocation.actions';
import PlaceResult = google.maps.places.PlaceResult;

export const geolocationFeatureKey = 'geolocation';

export interface GeolocationState {
  value: number;
  data: any;
  placeResult?: PlaceResult | null;
}

export const initialState: GeolocationState = {
  value: 5,
  data: {},
  placeResult: null

};


export const _geolocationReducer = createReducer<GeolocationState>(
  initialState,

  on(GeolocationActions.loadGeolocations, state => state),

  on(GeolocationActions.loadGeolocationsSuccess, (state, action): GeolocationState => {
    return {...state, data: action.data}
  }),

  on(GeolocationActions.loadGeolocationsFailure, (state) => state),

  on(GeolocationActions.setPlaceResult, (state, action): GeolocationState => {
    return {...state, placeResult: action.placeResult}
  }),
);

export function geolocationReducer(state: any, action: any) {
  return _geolocationReducer(state, action)
}

