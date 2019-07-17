/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectShifts = state => state.get('shifts')

export { selectShifts }
