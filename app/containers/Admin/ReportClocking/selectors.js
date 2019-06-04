/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect';

const selectReportClockings = (state) => state.get('reportClocking');

const makeSelectSearchOptions = () => createSelector(
  selectReportClockings,
  (scheduleState) => scheduleState.get('searchOptions')
);

const makeSelectDepartments = () => createSelector(
  selectReportClockings,
  (reportClockingState) => { const departments = reportClockingState.get('departments'); return departments.length ? departments : []; }
);

const makeSelectReportClocking = () => createSelector(
  selectReportClockings,
  (reportClockingState) => { const reportClocking = reportClockingState.get('reportClocking'); return reportClockingState.size > 0 ? reportClocking : {}; }
);

export {
  selectReportClockings,
  makeSelectDepartments,
  makeSelectSearchOptions,
  makeSelectReportClocking
};
