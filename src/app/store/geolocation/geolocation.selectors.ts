import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGeolocation from './geolocation.reducer';

export const selectGeolocationState = createFeatureSelector<fromGeolocation.GeolocationState>(
  fromGeolocation.geolocationFeatureKey
);
export const getPlacesResults = createSelector(selectGeolocationState, state => (state ? state.placesResults : null));

export const getRouteDistance = createSelector(selectGeolocationState, state => (state ? state.routeDistance : null));



