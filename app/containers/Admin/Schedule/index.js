import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import { onSearchOptionsChange, getDepartmentsByStoreId, getSchedule } from './actions';
import reducer from './reducer';
import saga from './saga';
import Schedule from './Schedule';
import { makeSelectSearchOptions, makeSelectDepartments, makeSelectSchedule } from './selectors';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  info: makeSelectInfo(),
  searchOptions: makeSelectSearchOptions(),
  departments: makeSelectDepartments(),
  schedule: makeSelectSchedule()
});

const mapDispatchToProps = (dispatch) => ({
  onSearchOptionsChange: (searchOptions) => { dispatch(onSearchOptionsChange(searchOptions)); },
  getDepartmentsByStoreId: (id) => (new Promise((resolve, reject) => {
    dispatch(getDepartmentsByStoreId(id));
    resolve();
  })),
  onSearch: () => (new Promise((resolve, reject) => {
    dispatch(getSchedule());
    setTimeout(() => {resolve()}, 2000);
  }))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'schedules', reducer });
const withSaga = injectSaga({ key: 'schedules', saga });

export default compose(withReducer, withSaga, withConnect)(Schedule);
export { mapDispatchToProps };
