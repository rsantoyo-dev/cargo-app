import {createReducer, on} from '@ngrx/store';
import * as ShippingActions from './shipping.actions';
import PlaceResult = google.maps.places.PlaceResult;
import Distance = google.maps.Distance;
import {LoadSize, ShippingSettingsPerKilometer} from "../../shipping/model";

export const shippingFeatureKey = 'shipping';


export interface ShippingState {

  shippingSettingsPerKilometer: ShippingSettingsPerKilometer;
  placesResults: Array<PlaceResult>;
  routeDistance: Distance;
  loadSize: LoadSize;
  weight: number;
}

export const initialState: ShippingState = {
  shippingSettingsPerKilometer: {gasCost: 0, sizeCost: 0, volumeCost: 0},
  placesResults: [{name: ''}, {name: ''}],
  routeDistance: {value: 0, text: ''},
  loadSize: {length: 0, width: 0, height: 0, volume: 0},
  weight: 0
};


export const _shippingReducer = createReducer<ShippingState>(
  initialState,

  on(ShippingActions.shippinglocations, state => state),

  on(ShippingActions.loadShippingSuccess, (state, action): ShippingState => {
    return {
      ...state,
      shippingSettingsPerKilometer: action.shippingSettingsPerKilometer
    }
  }),

  on(ShippingActions.loadShippingFailure, (state) => state),

  on(ShippingActions.updatePlaceByIndex, (state, action): ShippingState => {
    return {
      ...state,
      placesResults: state.placesResults.map((x, i) => i === action.index ? action.placeResult : x),
    }
  }),

  on(ShippingActions.setRouteDistance, (state, action): ShippingState => {
    return {...state, routeDistance: action.routeDistance}
  }),

  on(ShippingActions.setLoadSize, (state, action): ShippingState => {
    return {...state, loadSize: action.loadSize}
  }),

  on(ShippingActions.setWeight, (state, action): ShippingState => {
    return {...state, weight: action.weight}
  }),
);

export function shippingReducer(state: any, action: any) {
  return _shippingReducer(state, action)
}

