
import {
  CHANGE_SHIFT_DETAILS,
  ON_EDIT,
  ON_EDIT_ERROR,
  ON_EDIT_SUCCESS,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR
} from './constants';

export function onShiftDetailsChange(shift) {
  return {
    type: CHANGE_SHIFT_DETAILS,
    shift
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

export function onEditSuccess(shift) {
  return {
    type: ON_EDIT_SUCCESS,
    shift
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

export function onAddSuccess(shift) {
  return {
    type: ON_ADD_SUCCESS,
    shift
  };
}

