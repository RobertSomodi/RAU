import { fromJS } from 'immutable'

import { ON_DELETE, ON_DELETE_ERROR, ON_DELETE_SUCCESS } from './constants'

// The initial state of the App
const initialState = fromJS({
  stores: [],
})

function storesReducer(state = initialState, action) {
  switch (action.type) {
    case ON_DELETE:
      return state.set('loading', false).set('error', false)
    case ON_DELETE_SUCCESS:
      return state.set('loading', false).set('error', false)
    case ON_DELETE_ERROR:
      return state.set('error', action.error).set('loading', false)
    default:
      return state
  }
}

export default storesReducer
