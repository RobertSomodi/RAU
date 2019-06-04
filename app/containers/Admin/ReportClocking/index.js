import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import { onSearchOptionsChange, getDepartmentsByStoreId, getReportClocking } from './actions';
import reducer from './reducer';
import saga from './saga';
import ReportClocking from './ReportClocking';
import { makeSelectSearchOptions, makeSelectDepartments, makeSelectReportClocking } from './selectors';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  info: makeSelectInfo(),
  searchOptions: makeSelectSearchOptions(),
  departments: makeSelectDepartments(),
  reportClocking: makeSelectReportClocking()
});

const mapDispatchToProps = (dispatch) => ({
  onSearchOptionsChange: (searchOptions) => { dispatch(onSearchOptionsChange(searchOptions)); },
  getDepartmentsByStoreId: (id) => (new Promise((resolve, reject) => {
    dispatch(getDepartmentsByStoreId(id));
    resolve();
  })),
  onSearch: () => (new Promise((resolve, reject) => {
    dispatch(getReportClocking());
    setTimeout(() => { resolve(); }, 2000);
  }))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'reportClocking', reducer });
const withSaga = injectSaga({ key: 'reportClocking', saga });

export default compose(withReducer, withSaga, withConnect)(ReportClocking);
export { mapDispatchToProps };
