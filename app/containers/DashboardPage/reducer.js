import { fromJS } from 'immutable'

import { SIGN_IN, SIGN_IN_ERROR, CHANGE_USER_CREDENTIALS } from './constants'

// The initial state of the App
const initialState = fromJS({
  user_credentials: {
    email: '',
    password: '',
  },
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
    default:
      return state
  }
}

export default authReducer
