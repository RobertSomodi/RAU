/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectUser } from 'containers/Admin/ManageUser/selectors'
import { makeSelectAuthUser } from 'containers/App/selectors'

import {
  GET_USER_BY_ID,
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_TEAMS_BY_DEPARTMENT_ID,
  ON_EDIT,
  ON_ADD,
} from './constants'
import {
  getUserByIdSuccess,
  getUserByIdError,
  getDepartmentsByStoreIdSuccess,
  getDepartmentsByStoreIdError,
  getTeamsByDepartmentIdSuccess,
  getTeamsByDepartmentIdError,
  onEditSuccess,
} from './actions'

/**
 * Root saga manages watcher lifecycle
 */

/**
 * Github repos request/response handler
 */
export function* getUserById(data) {
  const user = yield select(makeSelectAuthUser())
  const requestURL = `http://localhost:9890/secureApi/user/${data.id}`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL, requestOptions)
    yield put(getUserByIdSuccess(user))
  } catch (err) {
    yield put(getUserByIdError(err))
  }
}

export function* getDepartmentsByStoreId(data) {
  const user = yield select(makeSelectAuthUser())
  const requestURL = `http://localhost:9890/secureApi/storeDepartmentMap/store/${data.id}`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    // Call our request helper (see 'utils/request')
    const departments = yield call(request, requestURL, requestOptions)
    yield put(getDepartmentsByStoreIdSuccess(departments))
  } catch (err) {
    yield put(getDepartmentsByStoreIdError(err))
  }
}

export function* getTeamsByDepartmentId(data) {
  const user = yield select(makeSelectAuthUser())
  const requestURL = `http://localhost:9890/secureApi/departmentTeamMap/department/${data.id}`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    // Call our request helper (see 'utils/request')
    const teams = yield call(request, requestURL, requestOptions)
    yield put(getTeamsByDepartmentIdSuccess(teams))
  } catch (err) {
    yield put(getTeamsByDepartmentIdError(err))
  }
}

export function* editUser(data) {
  const user = yield select(makeSelectAuthUser())
  let editUser = yield select(makeSelectUser())

  if (editUser.teamId == 0) {
    editUser.teamId = null
  }

  if (editUser.departmentId == 0) {
    editUser.departmentId = null
    editUser.teamId = null
  }
  const requestURL = `http://localhost:9890/secureApi/user/${editUser.id}`
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(editUser),
  }

  try {
    // Call our request helper (see 'utils/request')
    const userData = yield call(request, requestURL, requestOptions)
    yield put(onEditSuccess(userData))
  } catch (err) {
    yield put(onEditError(err))
  }
}

export function* addUser(data) {
  const user = yield select(makeSelectAuthUser())
  let addUser = yield select(makeSelectUser())

  if (addUser.teamId == 0) {
    addUser.teamId = null
  }

  if (addUser.departmentId == 0) {
    addUser.departmentId = null
    addUser.teamId = null
  }
  addUser.weeklyHours = parseInt(addUser.weeklyHours)
  addUser.daysOff = parseInt(addUser.daysOff)

  const requestURL = `http://localhost:9890/secureApi/user`
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Token: user.token },
    body: JSON.stringify(addUser),
  }

  try {
    // Call our request helper (see 'utils/request')
    const userData = yield call(request, requestURL, requestOptions)
    yield put(onEditSuccess(userData))
  } catch (err) {
    yield put(onEditError(err))
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(GET_USER_BY_ID, getUserById),
    takeLatest(GET_DEPARTMENTS_BY_STORE_ID, getDepartmentsByStoreId),
    takeLatest(GET_TEAMS_BY_DEPARTMENT_ID, getTeamsByDepartmentId),
    takeLatest(ON_EDIT, editUser),
    takeLatest(ON_ADD, addUser),
  ])
}
