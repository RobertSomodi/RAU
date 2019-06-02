/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectStores = (state) => state.get('stores');

export {
  selectStores
};
