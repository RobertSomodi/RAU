/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectSchedules = (state) => state.get('schedules');

const makeSelectSearchOptions = () => createSelector(
  selectSchedules,
  (scheduleState) => scheduleState.get('searchOptions')
);

const makeSelectDepartments = () => createSelector(
  selectSchedules,
  (schedulesState) => {let departments = schedulesState.get('departments'); return departments.length ? departments:[] }
);

const makeSelectSchedule = () => createSelector(
  selectSchedules,
  (schedulesState) => {let schedule = schedulesState.get('schedule'); return schedule.days ? schedule : {} }
);

export {
  selectSchedules,
  makeSelectDepartments,
  makeSelectSearchOptions,
  makeSelectSchedule
};
