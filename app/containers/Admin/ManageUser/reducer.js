import { fromJS } from 'immutable'

import {
  CHANGE_USER_DETAILS,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_ERROR,
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
  GET_DEPARTMENTS_BY_STORE_ID_ERROR,
  GET_TEAMS_BY_DEPARTMENT_ID,
  GET_TEAMS_BY_DEPARTMENT_ID_SUCCESS,
  GET_TEAMS_BY_DEPARTMENT_ID_ERROR,
  ON_EDIT,
  ON_EDIT_SUCCESS,
  ON_EDIT_ERROR,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  user: {
    storeId: null,
    departmentId: null,
    positionId: null,
    roleId: null,
    teamId: null,
    firstName: null,
    lastName: null,
    weeklyHours: null,
    daysOff: null,
    recoveryHours: null,
  },
  departments: [],
  teams: [],
})

function manageUserReducer(state = initialState, action) {
  switch (action.type) {
    case ON_EDIT:
      return state.set('loading', false).set('error', false)
    case ON_EDIT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.user)
    case ON_EDIT_ERROR:
      return state.set('error', action.error).set('loading', false)
    case ON_ADD:
      return state.set('loading', false).set('error', false)
    case ON_ADD_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.user)
    case ON_ADD_ERROR:
      return state.set('error', action.error).set('loading', false)
    case CHANGE_USER_DETAILS:
      return state.set('user', action.user)
    case GET_USER_BY_ID:
      return state.set('loading', false).set('error', false)
    case GET_USER_BY_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.user)
    case GET_USER_BY_ID_ERROR:
      return state.set('error', action.error).set('loading', false)
    case GET_DEPARTMENTS_BY_STORE_ID:
      return state.set('loading', false).set('error', false)
    case GET_DEPARTMENTS_BY_STORE_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('departments', action.departments)
    case GET_DEPARTMENTS_BY_STORE_ID_ERROR:
      return state.set('error', action.error).set('loading', false)
    case GET_TEAMS_BY_DEPARTMENT_ID:
      return state.set('loading', false).set('error', false)
    case GET_TEAMS_BY_DEPARTMENT_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('teams', action.teams)
    case GET_TEAMS_BY_DEPARTMENT_ID_ERROR:
      return state.set('error', action.error).set('loading', false)
    default:
      return state
  }
}

export default manageUserReducer
