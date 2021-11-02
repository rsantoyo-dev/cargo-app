import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGeolocation from './shipping.reducer';

export const selectShippingState = createFeatureSelector<fromGeolocation.ShippingState>(
  fromGeolocation.shippingFeatureKey
);
export const getPlacesResults = createSelector(selectShippingState, state => (state ? state.placesResults : null));

export const getRouteDistance = createSelector(selectShippingState, state => (state ? state.routeDistance : null));


