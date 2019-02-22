/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectGroupLazyLoad } from './selectors';

import { GET_GORUPS } from './constants';
import { getGroupsError, getGroupsSuccess } from './actions';

/**
 * Github repos request/response handler
 */
export function* getGroups() {
  // Select username from store
  const lazyLoad = yield select(makeSelectGroupLazyLoad());
  const requestURL = 'http://localhost:8080/groups/get/all';
  const requestOptions = {
    method: 'GET',
    body: JSON.stringify(lazyLoad),
    headers: { 'Content-Type': 'application/json' }
  };

  try {
    // Call our request helper (see 'utils/request')
    const groups = yield call(request, requestURL, requestOptions);
    yield put(getGroupsSuccess(groups));
  } catch (err) {
    yield put(getGroupsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getGroupsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_GORUPS, getGroups);
}
