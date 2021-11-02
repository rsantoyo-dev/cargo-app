import { createAction, props } from '@ngrx/store';
import PlaceResult = google.maps.places.PlaceResult;
import Distance = google.maps.Distance;

//API ACTIONS
export const shippinglocations = createAction(
  '[Shipping] Load Geolocations'
);

export const loadShippingSuccess = createAction(
  '[Shipping] Load Geolocations Success',
  props<{ data: any }>()
);

export const loadShippingFailure = createAction(
  '[Shipping] Load Geolocations Failure',
  props<{ error: any }>()
);

//PAGE ACTIONS
export const updatePlaceByIndex = createAction(
  '[Shipping] Add Address',
    props<{ placeResult: PlaceResult, index:number }>()
);

export const setRouteDistance = createAction(
  '[Shipping] Set Directions Route',
  props<{ routeDistance: Distance }>()
);

