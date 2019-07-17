import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { onEdit, onAdd, onShiftDetailsChange } from './actions'
import { makeSelectShift } from './selectors'
import { makeSelectInfo } from 'containers/Admin/selectors'
import reducer from './reducer'
import saga from './saga'
import ManageShift from './ManageShift'

const mapDispatchToProps = dispatch => ({
  onEdit: () =>
    new Promise((resolve, reject) => {
      dispatch(onEdit())
      setTimeout(() => {
        resolve()
      }, 2000)
    }),
  onAdd: () =>
    new Promise((resolve, reject) => {
      dispatch(onAdd())
      setTimeout(() => {
        resolve()
      }, 2000)
    }),
  onShiftDetailsChange: shift => {
    dispatch(onShiftDetailsChange(shift))
  },
})

const mapStateToProps = createStructuredSelector({
  info: makeSelectInfo(),
  shift: makeSelectShift(),
})
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'manage_shift', reducer })
const withSaga = injectSaga({ key: 'manage_shift', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ManageShift)
export { mapDispatchToProps }
