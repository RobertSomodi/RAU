import {
  CHANGE_DEPARTMENT_DETAILS,
  ON_EDIT,
  ON_EDIT_ERROR,
  ON_EDIT_SUCCESS,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR,
} from './constants'

export function onDepartmentDetailsChange(department) {
  return {
    type: CHANGE_DEPARTMENT_DETAILS,
    department,
  }
}

export function onEdit() {
  return {
    type: ON_EDIT,
  }
}

export function onEditError(error) {
  return {
    type: ON_EDIT_ERROR,
    error,
  }
}

export function onEditSuccess(department) {
  return {
    type: ON_EDIT_SUCCESS,
    department,
  }
}

export function onAdd() {
  return {
    type: ON_ADD,
  }
}

export function onAddError(error) {
  return {
    type: ON_ADD_ERROR,
    error,
  }
}

export function onAddSuccess(department) {
  return {
    type: ON_ADD_SUCCESS,
    department,
  }
}
