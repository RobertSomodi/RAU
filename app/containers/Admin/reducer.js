import { fromJS } from 'immutable'

import {
  SIGN_IN,
  SIGN_IN_ERROR,
  CHANGE_USER_CREDENTIALS,
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_ERROR,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  user_credentials: {
    email: '',
    password: '',
  },
  menu_state: {},
  info: {},
})

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('auth_user', null)
    case SIGN_IN_ERROR:
      return state.set('error', action.error).set('loading', false)
    case CHANGE_USER_CREDENTIALS:
      return state.set('user_credentials', action.user)
    case GET_INFO:
      return state
        .set('loading', true)
        .set('error', false)
        .set('info', {})
    case GET_INFO_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('info', action.info)
    case GET_INFO_ERROR:
      return state.set('error', action.error).set('loading', false)
    default:
      return state
  }
}

export default authReducer
