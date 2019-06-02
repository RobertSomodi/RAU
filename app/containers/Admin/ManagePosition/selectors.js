/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectManagePosition = (state) => state.get('manage_position');

const makeSelectPosition = () => createSelector(
  selectManagePosition,
  (managePositionState) => managePositionState.get('position')
);


export {
  selectManagePosition,
  makeSelectPosition,
};
