/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectAuth = state => state.get('auth')
const selectGroups = state => state.get('groups')

const makeSelectGroupLazyLoad = () =>
  createSelector(
    selectGroups,
    groupsState => groupsState.get('lazy_load')
  )

const makeSelectAuthUser = () =>
  createSelector(
    selectAuth,
    authState => authState.get('auth_user')
  )

export { selectGroups, makeSelectGroupLazyLoad, makeSelectAuthUser }
