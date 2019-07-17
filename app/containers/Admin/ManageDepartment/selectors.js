/**
 * AuthPage selectors
 */

import { createSelector } from 'reselect'

const selectManageDepartment = state => state.get('manage_department')

const makeSelectDepartment = () =>
  createSelector(
    selectManageDepartment,
    manageDepartmentState => manageDepartmentState.get('department')
  )

export { selectManageDepartment, makeSelectDepartment }
