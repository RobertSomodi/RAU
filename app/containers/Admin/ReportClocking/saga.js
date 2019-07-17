/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import { makeSelectAuthUser } from 'containers/App/selectors'
import {
  getDepartmentsByStoreIdSuccess,
  getDepartmentsByStoreIdError,
  getReportClockingSuccess,
  getReportClockingError,
} from './actions'
import { GET_DEPARTMENTS_BY_STORE_ID, GET_REPORT_CLOCKING } from './constants'
import { makeSelectSearchOptions } from './selectors'

import moment from 'moment'

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

export function* getReportClocking() {
  const user = yield select(makeSelectAuthUser())
  const searchOptions = yield select(makeSelectSearchOptions())
  const month = moment(searchOptions.month, 'YYYY-MM')
  const startDate = `${moment(month).format('YYYY-MM')}-1`
  const endDate = `${moment(month).format('YYYY-MM')}-${moment(
    month
  ).daysInMonth()}`
  const requestURL = `http://localhost:9890/secureApi/schedule/reports/clockingreport/${searchOptions.storeId}/${searchOptions.departmentId}/${startDate}/${endDate}`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Token: user.token },
  }

  try {
    // Call our request helper (see 'utils/request')
    const schedule = yield call(request, requestURL, requestOptions)
    yield put(getReportClockingSuccess(schedule))
  } catch (err) {
    yield put(getReportClockingError(err))
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(GET_DEPARTMENTS_BY_STORE_ID, getDepartmentsByStoreId),
    takeLatest(GET_REPORT_CLOCKING, getReportClocking),
  ])
}
