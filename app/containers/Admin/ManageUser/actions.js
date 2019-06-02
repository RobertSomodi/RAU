
import {
  CHANGE_USER_DETAILS,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_ERROR,
  GET_DEPARTMENTS_BY_STORE_ID,
  GET_DEPARTMENTS_BY_STORE_ID_ERROR,
  GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
  GET_TEAMS_BY_DEPARTMENT_ID,
  GET_TEAMS_BY_DEPARTMENT_ID_ERROR,
  GET_TEAMS_BY_DEPARTMENT_ID_SUCCESS,
  ON_EDIT,
  ON_EDIT_ERROR,
  ON_EDIT_SUCCESS,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR
} from './constants';

export function onUserDetailsChange(user) {
  return {
    type: CHANGE_USER_DETAILS,
    user
  };
}

export function onEdit() {
  return {
    type: ON_EDIT
  };
}

export function onEditError(error) {
  return {
    type: ON_EDIT_ERROR,
    error
  };
}

export function onEditSuccess(user) {
  return {
    type: ON_EDIT_SUCCESS,
    user
  };
}

export function onAdd() {
  return {
    type: ON_ADD
  };
}

export function onAddError(error) {
  return {
    type: ON_ADD_ERROR,
    error
  };
}

export function onAddSuccess(user) {
  return {
    type: ON_ADD_SUCCESS,
    user
  };
}



export function getUserById(id) {
  return {
    type: GET_USER_BY_ID,
    id
  };
}

export function getUserByIdError(error) {
  return {
    type: GET_USER_BY_ID_ERROR,
    error
  };
}

export function getUserByIdSuccess(user) {
  return {
    type: GET_USER_BY_ID_SUCCESS,
    user
  };
}

export function getDepartmentsByStoreId(id) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID,
    id
  };
}

export function getDepartmentsByStoreIdError(error) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID_ERROR,
    error
  };
}

export function getDepartmentsByStoreIdSuccess(departments) {
  return {
    type: GET_DEPARTMENTS_BY_STORE_ID_SUCCESS,
    departments
  };
}

export function getTeamsByDepartmentId(id) {
  return {
    type: GET_TEAMS_BY_DEPARTMENT_ID,
    id
  };
}

export function getTeamsByDepartmentIdError(error) {
  return {
    type: GET_TEAMS_BY_DEPARTMENT_ID_ERROR,
    error
  };
}

export function getTeamsByDepartmentIdSuccess(teams) {
  return {
    type: GET_TEAMS_BY_DEPARTMENT_ID_SUCCESS,
    teams
  };
}

