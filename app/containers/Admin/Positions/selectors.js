/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectPositions = (state) => state.get('positions');

export {
  selectPositions
};
