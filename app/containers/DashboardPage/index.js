import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import reducer from './reducer'
import saga from './saga'
import DashboardPage from './DashboardPage'

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = () => ({})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'dashboard', reducer })
const withSaga = injectSaga({ key: 'dashboard', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DashboardPage)
export { mapDispatchToProps }
