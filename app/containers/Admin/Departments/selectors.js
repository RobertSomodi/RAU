/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectDepartments = (state) => state.get('departments');

export {
  selectDepartments
};
