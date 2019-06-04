
import {
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
  GET_DEPARTMENTS_BY_STORE_ID_ERROR,
  CHANGE_SEARCH_OPTIONS,
  GET_SCHEDULE,
  GET_SCHEDULE_ERROR,
  GET_SCHEDULE_SUCCESS
} from './constants';

export function onSearchOptionsChange(searchOptions) {
  return {
    type: CHANGE_SEARCH_OPTIONS,
    searchOptions
  };
}

export function getDepartmentsByStoreId(id) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID,
    id
  };
}

export function getDepartmentsByStoreIdError(error) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID_ERROR,
    error
  };
}

export function getDepartmentsByStoreIdSuccess(departments) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
    departments
  };
}

export function getSchedule() {
  return {
    type: GET_SCHEDULE
  };
}

export function getScheduleError(error) {
  return {
    type: GET_SCHEDULE_ERROR,
    error
  };
}

export function getScheduleSuccess(schedule) {
  return {
    type: GET_SCHEDULE_SUCCESS,
    schedule
  };
}
