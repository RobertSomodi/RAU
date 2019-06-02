
import {
  CHANGE_STORE_DETAILS,
  ON_EDIT,
  ON_EDIT_ERROR,
  ON_EDIT_SUCCESS,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR
} from './constants';

export function onStoreDetailsChange(store) {
  return {
    type: CHANGE_STORE_DETAILS,
    store
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

export function onEditSuccess(store) {
  return {
    type: ON_EDIT_SUCCESS,
    store
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

export function onAddSuccess(store) {
  return {
    type: ON_ADD_SUCCESS,
    store
  };
}

