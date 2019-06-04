/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectTeam } from 'containers/Admin/ManageTeam/selectors';
import { makeSelectAuthUser } from 'containers/App/selectors';

import {  ON_EDIT, ON_ADD } from './constants';
import {  onEditSuccess, onEditError, onAddError, onAddSuccess } from './actions';


export function* editTeam(data) {
  const user = yield select(makeSelectAuthUser());
  let editTeam = yield select(makeSelectTeam());

  const requestURL = `http://localhost:9890/secureApi/team/${editTeam.id}`;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Token': user.token },
    body: JSON.stringify(editTeam)
  };

  try {
    // Call our request helper (see 'utils/request')
    const teamData = yield call(request, requestURL, requestOptions);
    yield put(onEditSuccess(teamData));
  } catch (err) {
    yield put(onEditError(err));
  }
}

export function* addTeam(data) {
  const user = yield select(makeSelectAuthUser());
  let addTeam = yield select(makeSelectTeam());
  
  const requestURL = `http://localhost:9890/secureApi/team`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Token': user.token },
    body: JSON.stringify(addTeam)
  };

  try {
    // Call our request helper (see 'utils/request')
    const teamData = yield call(request, requestURL, requestOptions);
    yield put(onAddSuccess(teamData));
  } catch (err) {
    yield put(onAddError(err));
  }
}

export default function* watchAll() {
  yield all([
    takeLatest(ON_EDIT, editTeam),
    takeLatest(ON_ADD, addTeam)
  ]);
}