/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUserDetails } from 'containers/Admin/ManageUser/selectors';

import { SIGN_UP } from './constants';
import { signUpError, signUpSuccess } from './actions';


/**
 * Github repos request/response handler
 */
export function* signUp() {
  // Select username from store
  const user = yield select(makeSelectUserDetails());
  const requestURL = 'http://localhost:8080/signup';
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    // Call our request helper (see 'utils/request')
    const userDetails = yield call(request, requestURL, requestOptions);
    yield put(signUpSuccess(userDetails));
  } catch (err) {
    yield put(signUpError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signUpData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_UP, signUp);
}
