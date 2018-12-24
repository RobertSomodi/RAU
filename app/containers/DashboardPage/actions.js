
import {
  SIGN_IN_ERROR,
  SIGN_IN,
  CHANGE_USER_CREDENTIALS
} from './constants';

export function onChangeUserCredentials(user) {
  return {
    type: CHANGE_USER_CREDENTIALS,
    user
  };
}

export function signIn(user) {
  return {
    type: SIGN_IN,
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
export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    error,
  };
}

