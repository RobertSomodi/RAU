
import {
  CHANGE_POSITION_DETAILS,
  ON_EDIT,
  ON_EDIT_ERROR,
  ON_EDIT_SUCCESS,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR
} from './constants';

export function onPositionDetailsChange(position) {
  return {
    type: CHANGE_POSITION_DETAILS,
    position
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

export function onEditSuccess(position) {
  return {
    type: ON_EDIT_SUCCESS,
    position
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

export function onAddSuccess(position) {
  return {
    type: ON_ADD_SUCCESS,
    position
  };
}

