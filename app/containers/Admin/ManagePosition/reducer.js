import { fromJS } from 'immutable'

import {
  CHANGE_POSITION_DETAILS,
  ON_EDIT,
  ON_EDIT_SUCCESS,
  ON_EDIT_ERROR,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  position: {
    id: null,
    name: null,
  },
})

function manageUserReducer(state = initialState, action) {
  switch (action.type) {
    case ON_EDIT:
      return state.set('loading', false).set('error', false)
    case ON_EDIT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('position', action.position)
    case ON_EDIT_ERROR:
      return state.set('error', action.error).set('loading', false)
    case ON_ADD:
      return state.set('loading', false).set('error', false)
    case ON_ADD_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('position', action.position)
    case ON_ADD_ERROR:
      return state.set('error', action.error).set('loading', false)
    case CHANGE_POSITION_DETAILS:
      return state.set('position', action.position)
    default:
      return state
  }
}

export default manageUserReducer
