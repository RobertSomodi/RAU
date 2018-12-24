/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectManageUser = (state) => state.get('manage_user');

const makeSelectUserDetails = () => createSelector(
  selectManageUser,
  (manageUserState) => manageUserState.get('user_details')
);

export {
  selectManageUser,
  makeSelectUserDetails
};
