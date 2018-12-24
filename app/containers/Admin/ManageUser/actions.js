
import {
  SIGN_UP_ERROR,
  SIGN_UP,
  CHANGE_USER_DETAILS,
  SIGN_UP_SUCCESS
} from './constants';

export function onUserDetailsChange(user) {
  return {
    type: CHANGE_USER_DETAILS,
    user
  };
}

export function signUp(user) {
  return {
    type: SIGN_UP,
    user
  };
}

/**
   * Dispatched when loading the repositories fails
   *
   * @param  {object} error The error
   *
   * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
   */
export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    error,
  };
}

export function signUpSuccess(error) {
  return {
    type: SIGN_UP_SUCCESS,
    error,
  };
}

