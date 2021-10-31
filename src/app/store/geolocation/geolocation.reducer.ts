import {createReducer, on} from '@ngrx/store';
import * as GeolocationActions from './geolocation.actions';
import PlaceResult = google.maps.places.PlaceResult;
import Distance = google.maps.Distance;

export const geolocationFeatureKey = 'geolocation';

export interface GeolocationState {
  placesDistance: number;
  data: any;
  placesResults: Array<PlaceResult>;
  routeDistance:Distance
}

export const initialState: GeolocationState = {
  placesDistance: 5,
  data: {},
  placesResults: [{name: ''}, {name: ''}],
  routeDistance: {value: 0, text:''}
};


export const _geolocationReducer = createReducer<GeolocationState>(
  initialState,

  on(GeolocationActions.loadGeolocations, state => state),

  on(GeolocationActions.loadGeolocationsSuccess, (state, action): GeolocationState => {
    return {...state,
      data: action.data
    }
  }),

  on(GeolocationActions.loadGeolocationsFailure, (state) => state),

  on(GeolocationActions.updatePlaceByIndex, (state, action): GeolocationState => {
    return {...state,
      placesResults: state.placesResults.map((x, i) => i === action.index ? action.placeResult : x),
    }
  }),

  on(GeolocationActions.setRouteDistance, (state, action): GeolocationState => {
    return {...state,
      routeDistance: action.routeDistance
    }
  }),
);

export function geolocationReducer(state: any, action: any) {
  return _geolocationReducer(state, action)
}

