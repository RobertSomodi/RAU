/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectUsers = state => state.get('users')

const makeSelectUsers = () =>
  createSelector(
    selectUsers,
    usersState => {
      let users = usersState.get('users')
      return users.length ? users : []
    }
  )

export { selectUsers, makeSelectUsers }
