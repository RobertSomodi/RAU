import { fromJS } from 'immutable';

import { GET_GORUPS, GET_GROUPS_ERROR, GET_GROUPS_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  user_credentials: {
    email: '',
    password: ''
  }
});

function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GORUPS:
      return state
        .set('loading', true)
        .set('error', false);

    case GET_GROUPS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case GET_GROUPS_SUCCESS:
      return state.set('groups', action.groups);
    default:
      return state;
  }
}

export default groupsReducer;
