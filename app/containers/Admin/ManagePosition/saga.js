/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectPosition } from 'containers/Admin/ManagePosition/selectors'
import { makeSelectAuthUser } from 'containers/App/selectors'

import { ON_EDIT, ON_ADD } from './constants'
import { onEditSuccess, onEditError, onAddError, onAddSuccess } from './actions'

export function* editPosition(data) {
  const user = yield select(makeSelectAuthUser())
  let editPosition = yield select(makeSelectPosition())

  const requestURL = `http://localhost:9890/secureApi/position/${editPosition.id}`
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(editPosition),
  }

  try {
    // Call our request helper (see 'utils/request')
    const positionData = yield call(request, requestURL, requestOptions)
    yield put(onEditSuccess(positionData))
  } catch (err) {
    yield put(onEditError(err))
  }
}

export function* addPosition(data) {
  const user = yield select(makeSelectAuthUser())
  let addPosition = yield select(makeSelectPosition())

  const requestURL = `http://localhost:9890/secureApi/position`
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(addPosition),
  }

  try {
    // Call our request helper (see 'utils/request')
    const positionData = yield call(request, requestURL, requestOptions)
    yield put(onAddSuccess(positionData))
  } catch (err) {
    yield put(onAddError(err))
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(ON_EDIT, editPosition),
    takeLatest(ON_ADD, addPosition),
  ])
}
