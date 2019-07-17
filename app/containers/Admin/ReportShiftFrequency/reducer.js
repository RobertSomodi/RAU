import { fromJS } from 'immutable'

import {
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_DEPARTMENTS_BY_STORE_ID_ERROR,
  GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
  CHANGE_SEARCH_OPTIONS,
  GET_REPORT_SHIFT_FREQUENCY,
  GET_REPORT_SHIFT_FREQUENCY_ERROR,
  GET_REPORT_SHIFT_FREQUENCY_SUCCESS,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  departments: [],
  searchOptions: {
    storeId: null,
    departmentId: null,
    month: null,
  },
})

function reportShiftFrequencyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS_BY_STORE_ID:
      return state.set('loading', false).set('error', false)
    case GET_DEPARTMENTS_BY_STORE_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('departments', action.departments)
    case GET_DEPARTMENTS_BY_STORE_ID_ERROR:
      return state.set('error', action.error).set('loading', false)
    case GET_REPORT_SHIFT_FREQUENCY:
      return state.set('loading', false).set('error', false)
    case GET_REPORT_SHIFT_FREQUENCY_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('reportShiftFrequency', action.schedule)
    case GET_REPORT_SHIFT_FREQUENCY_ERROR:
      return state.set('error', action.error).set('loading', false)
    case CHANGE_SEARCH_OPTIONS:
      return state.set('searchOptions', action.searchOptions)
    default:
      return state
  }
}

export default reportShiftFrequencyReducer
