import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { makeSelectLoading } from 'containers/App/selectors'
import { makeSelectUsers } from './selectors'
import { makeSelectInfo } from 'containers/Admin/selectors'
import { getUsers, onDelete } from './actions'
import reducer from './reducer'
import saga from './saga'
import Users from './Users'

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  users: makeSelectUsers(),
  info: makeSelectInfo(),
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    return new Promise((resolve, reject) => {
      dispatch(getUsers())
      resolve()
    })
  },
  onDelete: id => {
    return new Promise((resolve, reject) => {
      dispatch(onDelete(id))
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'users', reducer })
const withSaga = injectSaga({ key: 'users', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Users)
export { mapDispatchToProps }
