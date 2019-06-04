/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectDepartment } from 'containers/Admin/ManageDepartment/selectors';
import { makeSelectAuthUser } from 'containers/App/selectors';

import {  ON_EDIT, ON_ADD } from './constants';
import {  onEditSuccess, onEditError, onAddError, onAddSuccess } from './actions';


export function* editDepartment(data) {
  const user = yield select(makeSelectAuthUser());
  let editDepartment = yield select(makeSelectDepartment());

  const requestURL = `http://localhost:9890/secureApi/department/${editDepartment.id}`;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Token': user.token },
    body: JSON.stringify(editDepartment)
  };

  try {
    // Call our request helper (see 'utils/request')
    const departmentData = yield call(request, requestURL, requestOptions);
    yield put(onEditSuccess(departmentData));
  } catch (err) {
    yield put(onEditError(err));
  }
}

export function* addDepartment(data) {
  const user = yield select(makeSelectAuthUser());
  let addDepartment = yield select(makeSelectDepartment());
  
  const requestURL = `http://localhost:9890/secureApi/department`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Token': user.token },
    body: JSON.stringify(addDepartment)
  };

  try {
    // Call our request helper (see 'utils/request')
    const departmentData = yield call(request, requestURL, requestOptions);
    yield put(onAddSuccess(departmentData));
  } catch (err) {
    yield put(onAddError(err));
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(ON_EDIT, editDepartment),
    takeLatest(ON_ADD, addDepartment)
  ]);
}