/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectAuthUser } from 'containers/App/selectors'
import { getInfoSuccess, getInfoError } from './actions'
import { GET_INFO } from './constants'

/**
 * Github repos request/response handler
 */
export function* getInfo() {
  const user = yield select(makeSelectAuthUser())
  const requestURL = `http://localhost:9890/secureApi/info/`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    // Call our request helper (see 'utils/request')
    const info = yield call(request, requestURL, requestOptions)
    yield put(getInfoSuccess(info))
  } catch (err) {
    yield put(getInfoError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getInfoData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_INFO, getInfo)
}
