
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  ON_DELETE,
  ON_DELETE_ERROR,
  ON_DELETE_SUCCESS
} from './constants';

export function getUsers(filters) {
  return {
    type: GET_USERS,
    filters
  };
}

export function getUsersError(error) {
  return {
    type: GET_USERS_ERROR,
    error
  };
}

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    users
  };
}

export function onDelete(id) {
  return {
    type: ON_DELETE,
    id
  };
}

export function onDeleteError(error) {
  return {
    type: ON_DELETE_ERROR,
    error
  };
}

export function onDeleteSuccess() {
  return {
    type: ON_DELETE_SUCCESS
  };
}

