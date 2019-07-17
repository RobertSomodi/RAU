/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectManageTeam = state => state.get('manage_team')

const makeSelectTeam = () =>
  createSelector(
    selectManageTeam,
    manageTeamState => manageTeamState.get('team')
  )

export { selectManageTeam, makeSelectTeam }
