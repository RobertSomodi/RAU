import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { onEdit, onAdd, onUserDetailsChange, getUserById, getDepartmentsByStoreId, getTeamsByDepartmentId } from './actions';
import { makeSelectUser, makeSelectDepartments, makeSelectTeams } from './selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import reducer from './reducer';
import saga from './saga';
import ManageUser from './ManageUser';

const mapDispatchToProps = (dispatch) => ({
  onEdit: () => (new Promise((resolve, reject) => {
    dispatch(onEdit());
    setTimeout(() => {resolve()}, 2000);
  })),
  onAdd: () => (new Promise((resolve, reject) => {
    dispatch(onAdd());
    setTimeout(() => {resolve()}, 2000);
  })),
  onUserDetailsChange: (user) => { dispatch(onUserDetailsChange(user)); },
  getUserById: (id) => (new Promise((resolve, reject) => {
    dispatch(getUserById(id));
    resolve();
  })),
  getDepartmentsByStoreId: (id) => (new Promise((resolve, reject) => {
    dispatch(getDepartmentsByStoreId(id));
    resolve();
  })),
  getTeamsByDepartmentId: (id) => (new Promise((resolve, reject) => {
    dispatch(getTeamsByDepartmentId(id));
    resolve();
  }))
});

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  departments: makeSelectDepartments(),
  teams: makeSelectTeams(),
  info: makeSelectInfo(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'manage_user', reducer });
const withSaga = injectSaga({ key: 'manage_user', saga });

export default compose(withReducer, withSaga, withConnect)(ManageUser);
export { mapDispatchToProps };
