/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.api || initialState;

const makeSelectApi = () =>
  createSelector(
    selectHome,
    homeState => homeState.api,
  );

export { selectHome, makeSelectApi };
