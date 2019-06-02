/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectManageStore = (state) => state.get('manage_store');

const makeSelectStore = () => createSelector(
  selectManageStore,
  (manageStoreState) => manageStoreState.get('store')
);


export {
  selectManageStore,
  makeSelectStore,
};
