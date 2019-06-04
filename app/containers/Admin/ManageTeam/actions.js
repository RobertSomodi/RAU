
import {
  CHANGE_TEAM_DETAILS,
  ON_EDIT,
  ON_EDIT_ERROR,
  ON_EDIT_SUCCESS,
  ON_ADD,
  ON_ADD_SUCCESS,
  ON_ADD_ERROR
} from './constants';

export function onTeamDetailsChange(team) {
  return {
    type: CHANGE_TEAM_DETAILS,
    team
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

export function onEditSuccess(team) {
  return {
    type: ON_EDIT_SUCCESS,
    team
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

export function onAddSuccess(team) {
  return {
    type: ON_ADD_SUCCESS,
    team
  };
}

