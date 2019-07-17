/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectReportShiftFrequencys = state => state.get('reportShiftFrequency')

const makeSelectSearchOptions = () =>
  createSelector(
    selectReportShiftFrequencys,
    scheduleState => scheduleState.get('searchOptions')
  )

const makeSelectDepartments = () =>
  createSelector(
    selectReportShiftFrequencys,
    reportShiftFrequencyState => {
      const departments = reportShiftFrequencyState.get('departments')
      return departments.length ? departments : []
    }
  )

const makeSelectReportShiftFrequency = () =>
  createSelector(
    selectReportShiftFrequencys,
    reportShiftFrequencyState => {
      const reportShiftFrequency = reportShiftFrequencyState.get(
        'reportShiftFrequency'
      )
      return reportShiftFrequency
    }
  )

export {
  selectReportShiftFrequencys,
  makeSelectDepartments,
  makeSelectSearchOptions,
  makeSelectReportShiftFrequency,
}
