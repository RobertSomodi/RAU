/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectSchedules = state => state.get('schedules')

const makeSelectSearchOptions = () =>
  createSelector(
    selectSchedules,
    scheduleState => scheduleState.get('searchOptions')
  )

const makeSelectDepartments = () =>
  createSelector(
    selectSchedules,
    schedulesState => {
      let departments = schedulesState.get('departments')
      return departments.length ? departments : []
    }
  )

const makeSelectSelectedShift = () =>
  createSelector(
    selectSchedules,
    schedulesState => {
      let selectedShift = schedulesState.get('selectedShift')
      return typeof selectedShift === 'object' &&
        Object.keys(selectedShift).length
        ? selectedShift
        : {}
    }
  )

const makeSelectAddedShifts = () =>
  createSelector(
    selectSchedules,
    schedulesState => {
      let addedShifts = schedulesState.get('addedShifts')
      return addedShifts && addedShifts.length ? addedShifts : []
    }
  )

const makeSelectSchedule = () =>
  createSelector(
    selectSchedules,
    schedulesState => {
      let schedule = schedulesState.get('schedule')
      return schedule.days ? schedule : {}
    }
  )

export {
  selectSchedules,
  makeSelectDepartments,
  makeSelectSearchOptions,
  makeSelectSchedule,
  makeSelectSelectedShift,
  makeSelectAddedShifts,
}
