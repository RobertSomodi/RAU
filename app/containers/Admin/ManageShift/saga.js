/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectShift } from 'containers/Admin/ManageShift/selectors'
import { makeSelectAuthUser } from 'containers/App/selectors'

import { ON_EDIT, ON_ADD } from './constants'
import { onEditSuccess, onEditError, onAddError, onAddSuccess } from './actions'

export function* editShift(data) {
  const user = yield select(makeSelectAuthUser())
  let editShift = yield select(makeSelectShift())

  const requestURL = `http://localhost:9890/secureApi/shift/${editShift.id}`
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(editShift),
  }

  try {
    // Call our request helper (see 'utils/request')
    const shiftData = yield call(request, requestURL, requestOptions)
    yield put(onEditSuccess(shiftData))
  } catch (err) {
    yield put(onEditError(err))
  }
}

export function* addShift(data) {
  const user = yield select(makeSelectAuthUser())
  let addShift = yield select(makeSelectShift())

  const requestURL = `http://localhost:9890/secureApi/shift`
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(addShift),
  }

  try {
    // Call our request helper (see 'utils/request')
    const shiftData = yield call(request, requestURL, requestOptions)
    yield put(onAddSuccess(shiftData))
  } catch (err) {
    yield put(onAddError(err))
  }
}

export default function* watchAll() {
  yield all([takeLatest(ON_EDIT, editShift), takeLatest(ON_ADD, addShift)])
}
