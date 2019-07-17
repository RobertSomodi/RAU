/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectTeams = state => state.get('teams')

export { selectTeams }
