import {createReducer, on} from '@ngrx/store';
import * as GeolocationActions from './geolocation.actions';
import PlaceResult = google.maps.places.PlaceResult;

export const geolocationFeatureKey = 'geolocation';

export interface GeolocationState {
  value: number;
  data: any;
  placesResults: Array<PlaceResult>;
}

export const initialState: GeolocationState = {
  value: 5,
  data: {},
  placesResults: [{name:''},{name:''}]
};


export const _geolocationReducer = createReducer<GeolocationState>(
  initialState,

  on(GeolocationActions.loadGeolocations, state => state),

  on(GeolocationActions.loadGeolocationsSuccess, (state, action): GeolocationState => {
    return {...state, data: action.data}
  }),

  on(GeolocationActions.loadGeolocationsFailure, (state) => state),

  on(GeolocationActions.updatePlaceByIndex, (state, action): GeolocationState => {
    return {...state, placesResults: state.placesResults.map((x,i)=>i===action.index ? action.placeResult : x)}
  }),
);

export function geolocationReducer(state: any, action: any) {
  return _geolocationReducer(state, action)
}

