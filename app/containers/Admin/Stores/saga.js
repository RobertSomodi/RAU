/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectAuthUser } from 'containers/App/selectors';
import { onDeleteSuccess, onDeleteError } from './actions';
import { ON_DELETE } from './constants';



export function* deleteStore(data) {
  const user = yield select(makeSelectAuthUser());

  const requestURL = `http://localhost:9890/secureApi/store/${data.id}`;
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Token': user.token }
  };

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL, requestOptions);
    yield put(onDeleteSuccess(data));
  } catch (err) {
    yield put(onDeleteError(err));
  }
}


export default function* watchAll() {
  yield all([
    takeLatest(ON_DELETE, deleteStore)
  ]);
}