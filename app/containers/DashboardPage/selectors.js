/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectAuth = state => state.get('auth')

const makeSelectUser = () =>
  createSelector(
    selectAuth,
    authState => authState.get('user_credentials')
  )

const makeSelectAuthUser = () =>
  createSelector(
    selectAuth,
    authState => authState.get('auth_user')
  )

export { selectAuth, makeSelectUser, makeSelectAuthUser }
