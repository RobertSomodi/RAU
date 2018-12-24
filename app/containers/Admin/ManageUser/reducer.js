import { fromJS } from 'immutable';

import { SIGN_UP, SIGN_UP_ERROR, CHANGE_USER_DETAILS } from './constants';

// The initial state of the App
const initialState = fromJS({
  user_details: {
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  }
});

function manageUserReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state
        .set('loading', true)
        .set('error', false);
    case SIGN_UP_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case CHANGE_USER_DETAILS:
      return state.set('user_details', action.user);
    default:
      return state;
  }
}

export default manageUserReducer;
