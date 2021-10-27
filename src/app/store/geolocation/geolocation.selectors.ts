import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGeolocation from './geolocation.reducer';

export const selectGeolocationState = createFeatureSelector<fromGeolocation.GeolocationState>(
  fromGeolocation.geolocationFeatureKey
);
export const getValue = createSelector(selectGeolocationState, state => (state ? state.value : null));
