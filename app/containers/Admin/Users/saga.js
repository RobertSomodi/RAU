import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectAuthUser } from 'containers/App/selectors'
import {
  getUsersSuccess,
  getUsersError,
  onDeleteSuccess,
  onDeleteError,
} from './actions'
import { SIGN_IN, GET_USERS, ON_DELETE } from './constants'

export function* getUsers() {
  const user = yield select(makeSelectAuthUser())
  const filters = `${user.data.storeId}/${user.data.departmentId}`
  const requestURL = `http://localhost:9890/secureApi/user/all/${filters}`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    const users = yield call(request, requestURL, requestOptions)
    yield put(getUsersSuccess(users))
  } catch (err) {
    yield put(getUsersError(err))
  }
}

export function* deleteUser(data) {
  const user = yield select(makeSelectAuthUser())

  const requestURL = `http://localhost:9890/secureApi/user/${data.id}`
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    const data = yield call(request, requestURL, requestOptions)
    yield put(onDeleteSuccess(data))
  } catch (err) {
    yield put(onDeleteError(err))
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(GET_USERS, getUsers),
    takeLatest(ON_DELETE, deleteUser),
  ])
}
