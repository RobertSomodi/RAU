/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectStore } from 'containers/Admin/ManageStore/selectors'
import { makeSelectAuthUser } from 'containers/App/selectors'

import { ON_EDIT, ON_ADD } from './constants'
import { onEditSuccess, onEditError, onAddError, onAddSuccess } from './actions'

export function* editStore(data) {
  const user = yield select(makeSelectAuthUser())
  let editStore = yield select(makeSelectStore())

  const requestURL = `http://localhost:9890/secureApi/store/${editStore.id}`
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(editStore),
  }

  try {
    // Call our request helper (see 'utils/request')
    const storeData = yield call(request, requestURL, requestOptions)
    yield put(onEditSuccess(storeData))
  } catch (err) {
    yield put(onEditError(err))
  }
}

export function* addStore(data) {
  const user = yield select(makeSelectAuthUser())
  let addStore = yield select(makeSelectStore())

  const requestURL = `http://localhost:9890/secureApi/store`
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(addStore),
  }

  try {
    // Call our request helper (see 'utils/request')
    const storeData = yield call(request, requestURL, requestOptions)
    yield put(onAddSuccess(storeData))
  } catch (err) {
    yield put(onAddError(err))
  }
}

export default function* watchAll() {
  yield all([takeLatest(ON_EDIT, editStore), takeLatest(ON_ADD, addStore)])
}
