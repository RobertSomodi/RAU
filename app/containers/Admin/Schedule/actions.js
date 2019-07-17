import {
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
  GET_DEPARTMENTS_BY_STORE_ID_ERROR,
  CHANGE_SEARCH_OPTIONS,
  GET_SCHEDULE,
  GET_SCHEDULE_ERROR,
  GET_SCHEDULE_SUCCESS,
  SET_SELECTED_SHIFT,
  SAVE_SCHEDULE,
  SAVE_SCHEDULE_ERROR,
  SAVE_SCHEDULE_SUCCESS,
  ADD_SHIFT,
} from './constants';

export function onSearchOptionsChange(searchOptions) {
  return {
    type: CHANGE_SEARCH_OPTIONS,
    searchOptions,
  }
}

export function getDepartmentsByStoreId(id) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID,
    id,
  }
}

export function getDepartmentsByStoreIdError(error) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID_ERROR,
    error,
  }
}

export function getDepartmentsByStoreIdSuccess(departments) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
    departments,
  }
}

export function getSchedule() {
  return {
    type: GET_SCHEDULE,
  }
}

export function getScheduleError(error) {
  return {
    type: GET_SCHEDULE_ERROR,
    error,
  }
}

export function getScheduleSuccess(schedule) {
  return {
    type: GET_SCHEDULE_SUCCESS,
    schedule,
  }
}

export function saveSchedule() {
  return {
    type: SAVE_SCHEDULE,
  }
}

export function saveScheduleError(error) {
  return {
    type: SAVE_SCHEDULE_ERROR,
    error,
  }
}

export function saveScheduleSuccess() {
  return {
    type: SAVE_SCHEDULE_SUCCESS,
  }
}

export function onSelectedShiftChange(shift) {
  return {
    type: SET_SELECTED_SHIFT,
    shift,
  }
}

export function onAddShift(addedShifts, schedule) {
  addedShifts.forEach(shift => {
    if(shift.teamId) {
      schedule.teams[shift.teamId].users[shift.userId].days[shift.date].shiftId = shift.shiftId;
      schedule.teams[shift.teamId].users[shift.userId].days[shift.date].checkin= null;
      schedule.teams[shift.teamId].users[shift.userId].days[shift.date].checkout = null;
    } else {
      schedule.users[shift.userId].days[shift.date].shiftId = shift.shiftId;
      schedule.users[shift.userId].days[shift.date].checkin= null;
      schedule.users[shift.userId].days[shift.date].checkout = null;
    }
  });
  return {
    type: ADD_SHIFT,
    addedShifts,
    schedule,
  }
}
