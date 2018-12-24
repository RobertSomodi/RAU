/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUser } from 'containers/AuthPage/selectors';

import { SIGN_IN } from './constants';
import { signInSuccess } from '../App/actions';
import { signInError } from './actions';


/**
 * Github repos request/response handler
 */
export function* signIn() {
  // Select username from store
  const user = yield select(makeSelectUser());
  const requestURL = 'http://localhost:8080/login';
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    // Call our request helper (see 'utils/request')
    const authUser = yield call(request, requestURL, requestOptions);
    yield put(signInSuccess(authUser));
  } catch (err) {
    yield put(signInError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signInData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_IN, signIn);
}
