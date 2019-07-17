import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { onEdit, onAdd, onTeamDetailsChange } from './actions'
import { makeSelectTeam } from './selectors'
import { makeSelectInfo } from 'containers/Admin/selectors'
import reducer from './reducer'
import saga from './saga'
import ManageTeam from './ManageTeam'

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
  onTeamDetailsChange: team => {
    dispatch(onTeamDetailsChange(team))
  },
})

const mapStateToProps = createStructuredSelector({
  info: makeSelectInfo(),
  team: makeSelectTeam(),
})
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: 'manage_team', reducer })
const withSaga = injectSaga({ key: 'manage_team', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ManageTeam)
export { mapDispatchToProps }
