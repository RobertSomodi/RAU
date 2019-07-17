import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { makeSelectLoading, makeSelectAuthUser } from 'containers/App/selectors'
import { signIn, onChangeUserCredentials } from './actions'
import reducer from './reducer'
import saga from './saga'
import AuthPage from './AuthPage'

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  auth_user: makeSelectAuthUser(),
})

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(signIn()),
  onCredentialsChange: user => dispatch(onChangeUserCredentials(user)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'auth', reducer })
const withSaga = injectSaga({ key: 'auth', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AuthPage)
export { mapDispatchToProps }
