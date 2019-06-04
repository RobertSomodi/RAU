import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { onEdit, onAdd, onDepartmentDetailsChange } from './actions';
import { makeSelectDepartment } from './selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import reducer from './reducer';
import saga from './saga';
import ManageDepartment from './ManageDepartment';

const mapDispatchToProps = (dispatch) => ({
  onEdit: () => (new Promise((resolve, reject) => {
    dispatch(onEdit());
    setTimeout(() => {resolve()}, 2000);
  })),
  onAdd: () => (new Promise((resolve, reject) => {
    dispatch(onAdd());
    setTimeout(() => {resolve()}, 2000);
  })),
  onDepartmentDetailsChange: (department) => { dispatch(onDepartmentDetailsChange(department)); },
});


const mapStateToProps = createStructuredSelector({
  info: makeSelectInfo(),
  department: makeSelectDepartment()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'manage_department', reducer });
const withSaga = injectSaga({ key: 'manage_department', saga });

export default compose(withReducer, withSaga, withConnect)(ManageDepartment);
export { mapDispatchToProps };
