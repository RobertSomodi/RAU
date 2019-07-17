import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { onEdit, onAdd, onPositionDetailsChange } from './actions'
import { makeSelectPosition } from './selectors'
import { makeSelectInfo } from 'containers/Admin/selectors'
import reducer from './reducer'
import saga from './saga'
import ManagePosition from './ManagePosition'

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
  onPositionDetailsChange: position => {
    dispatch(onPositionDetailsChange(position))
  },
})

const mapStateToProps = createStructuredSelector({
  info: makeSelectInfo(),
  position: makeSelectPosition(),
})
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'manage_position', reducer })
const withSaga = injectSaga({ key: 'manage_position', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ManagePosition)
export { mapDispatchToProps }
