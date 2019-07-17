import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { makeSelectLoading } from 'containers/App/selectors'
import { makeSelectInfo } from 'containers/Admin/selectors'
import {
  onSearchOptionsChange,
  getDepartmentsByStoreId,
  onSelectedShiftChange,
  getSchedule,
  onAddShift,
  saveSchedule
} from './actions'
import reducer from './reducer'
import saga from './saga'
import Schedule from './Schedule'
import {
  makeSelectSearchOptions,
  makeSelectDepartments,
  makeSelectSchedule,
  makeSelectSelectedShift,
  makeSelectAddedShifts,
} from './selectors'
import { makeSelectAuthUser } from '../../App/selectors';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  info: makeSelectInfo(),
  searchOptions: makeSelectSearchOptions(),
  departments: makeSelectDepartments(),
  schedule: makeSelectSchedule(),
  selectedShift: makeSelectSelectedShift(),
  addedShifts: makeSelectAddedShifts(),
  authUser: makeSelectAuthUser()
})

const mapDispatchToProps = dispatch => ({
  onSearchOptionsChange: searchOptions => {
    dispatch(onSearchOptionsChange(searchOptions))
  },
  onSelectedShiftChange: shift => {
    dispatch(onSelectedShiftChange(shift))
  },
  getDepartmentsByStoreId: id =>
    new Promise((resolve, reject) => {
      dispatch(getDepartmentsByStoreId(id))
      resolve()
    }),
  saveSchedule: () => {
    dispatch(saveSchedule())
  },
  onAddShift: (addedShifts, schedule) => {
    dispatch(onAddShift(addedShifts, schedule))
  },
  onSearch: () =>
    new Promise((resolve, reject) => {
      dispatch(getSchedule())
      setTimeout(() => {
        resolve()
      }, 2000)
    }),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'schedules', reducer })
const withSaga = injectSaga({ key: 'schedules', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Schedule)
export { mapDispatchToProps }
