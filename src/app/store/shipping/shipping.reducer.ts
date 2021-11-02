import {createReducer, on} from '@ngrx/store';
import * as ShippingActions from './shipping.actions';
import PlaceResult = google.maps.places.PlaceResult;
import Distance = google.maps.Distance;

export const shippingFeatureKey = 'shipping';

export interface ShippingState {
  placesDistance: number;
  data: any;
  placesResults: Array<PlaceResult>;
  routeDistance:Distance
}

export const initialState: ShippingState = {
  placesDistance: 5,
  data: {},
  placesResults: [{name: ''}, {name: ''}],
  routeDistance: {value: 0, text:''}
};


export const _shippingReducer = createReducer<ShippingState>(
  initialState,

  on(ShippingActions.shippinglocations, state => state),

  on(ShippingActions.loadShippingSuccess, (state, action): ShippingState => {
    return {...state,
      data: action.data
    }
  }),

  on(ShippingActions.loadShippingFailure, (state) => state),

  on(ShippingActions.updatePlaceByIndex, (state, action): ShippingState => {
    return {...state,
      placesResults: state.placesResults.map((x, i) => i === action.index ? action.placeResult : x),
    }
  }),

  on(ShippingActions.setRouteDistance, (state, action): ShippingState => {
    return {...state,
      routeDistance: action.routeDistance
    }
  }),
);

export function shippingReducer(state: any, action: any) {
  return _shippingReducer(state, action)
}

