
import {
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
  GET_DEPARTMENTS_BY_STORE_ID_ERROR,
  CHANGE_SEARCH_OPTIONS,
  GET_REPORT_CLOCKING,
  GET_REPORT_CLOCKING_ERROR,
  GET_REPORT_CLOCKING_SUCCESS
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

export function getReportClocking() {
  return {
    type: GET_REPORT_CLOCKING
  };
}

export function getReportClockingError(error) {
  return {
    type: GET_REPORT_CLOCKING_ERROR,
    error
  };
}

export function getReportClockingSuccess(schedule) {
  return {
    type: GET_REPORT_CLOCKING_SUCCESS,
    schedule
  };
}
