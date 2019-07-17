import { GET_GROUPS_SUCCESS, GET_GROUPS_ERROR, GET_GROUPS } from './constants'

export function getGroups() {
  return {
    type: GET_GROUPS,
  }
}

export function getGroupsSuccess(groups) {
  return {
    type: GET_GROUPS_SUCCESS,
    groups,
  }
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function getGroupsError(error) {
  return {
    type: GET_GROUPS_ERROR,
    error,
  }
}
