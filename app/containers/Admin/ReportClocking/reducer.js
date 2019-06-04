import { fromJS } from 'immutable';

import { GET_DEPARTMENTS_BY_STORE_ID, GET_DEPARTMENTS_BY_STORE_ID_ERROR, GET_DEPARTMENTS_BY_STORE_ID_SUCCESS, CHANGE_SEARCH_OPTIONS, GET_REPORT_CLOCKING, GET_REPORT_CLOCKING_ERROR, GET_REPORT_CLOCKING_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  reportClocking: {},
  departments: [],
  searchOptions: {
    storeId: null,
    departmentId: null,
    month: null
  }
});

function reportClockingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS_BY_STORE_ID:
      return state
        .set('loading', false)
        .set('error', false);
    case GET_DEPARTMENTS_BY_STORE_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('departments', action.departments);
    case GET_DEPARTMENTS_BY_STORE_ID_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case GET_REPORT_CLOCKING:
      return state
        .set('loading', false)
        .set('error', false);
    case GET_REPORT_CLOCKING_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('reportClocking', action.schedule);
    case GET_REPORT_CLOCKING_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case CHANGE_SEARCH_OPTIONS:
      return state.set('searchOptions', action.searchOptions);
    default:
      return state;
  }
}

export default reportClockingReducer;
