import { ON_DELETE, ON_DELETE_ERROR, ON_DELETE_SUCCESS } from './constants'

export function onDelete(id) {
  return {
    type: ON_DELETE,
    id,
  }
}

export function onDeleteError(error) {
  return {
    type: ON_DELETE_ERROR,
    error,
  }
}

export function onDeleteSuccess() {
  return {
    type: ON_DELETE_SUCCESS,
  }
}
