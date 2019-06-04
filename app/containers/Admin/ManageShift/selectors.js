/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectManageShift = (state) => state.get('manage_shift');

const makeSelectShift = () => createSelector(
  selectManageShift,
  (manageShiftState) => manageShiftState.get('shift')
);


export {
  selectManageShift,
  makeSelectShift,
};
