/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectAdmin = state => state.get('admin')

const makeSelectUser = () =>
  createSelector(
    selectAdmin,
    adminState => adminState.get('user_credentials')
  )

const makeSelectAuthUser = () =>
  createSelector(
    selectAdmin,
    adminState => adminState.get('auth_user')
  )

const makeSelectInfo = () =>
  createSelector(
    selectAdmin,
    adminState => adminState.get('info')
  )

export { selectAdmin, makeSelectUser, makeSelectAuthUser, makeSelectInfo }
