/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectManageUser = (state) => state.get('manage_user');

const makeSelectUser = () => createSelector(
  selectManageUser,
  (manageUserState) => manageUserState.get('user')
);

const makeSelectDepartments = () => createSelector(
  selectManageUser,
  (manageUserState) => {let departments = manageUserState.get('departments'); return departments.length ? departments:[] }
);

const makeSelectTeams = () => createSelector(
  selectManageUser,
  (manageUserState) => {let teams = manageUserState.get('teams'); return teams.length ? teams:[] }
);

export {
  selectManageUser,
  makeSelectUser,
  makeSelectDepartments,
  makeSelectTeams
};
