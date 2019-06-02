import { fromJS } from 'immutable';

import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR, ON_DELETE, ON_DELETE_ERROR, ON_DELETE_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  users: []
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return state
        .set('loading', false)
        .set('error', false);
    case GET_USERS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('users', action.users);
    case GET_USERS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case ON_DELETE:
      return state
        .set('loading', false)
        .set('error', false);
    case ON_DELETE_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
    case ON_DELETE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default usersReducer;
