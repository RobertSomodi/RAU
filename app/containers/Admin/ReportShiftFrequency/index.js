import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import { onSearchOptionsChange, getDepartmentsByStoreId, getReportShiftFrequency } from './actions';
import reducer from './reducer';
import saga from './saga';
import ReportShiftFrequency from './ReportShiftFrequency';
import { makeSelectSearchOptions, makeSelectDepartments, makeSelectReportShiftFrequency } from './selectors';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  info: makeSelectInfo(),
  searchOptions: makeSelectSearchOptions(),
  departments: makeSelectDepartments(),
  reportShiftFrequency: makeSelectReportShiftFrequency()
});

const mapDispatchToProps = (dispatch) => ({
  onSearchOptionsChange: (searchOptions) => { dispatch(onSearchOptionsChange(searchOptions)); },
  getDepartmentsByStoreId: (id) => (new Promise((resolve, reject) => {
    dispatch(getDepartmentsByStoreId(id));
    resolve();
  })),
  onSearch: () => (new Promise((resolve, reject) => {
    dispatch(getReportShiftFrequency());
    setTimeout(() => { resolve(); }, 2000);
  }))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'reportShiftFrequency', reducer });
const withSaga = injectSaga({ key: 'reportShiftFrequency', saga });

export default compose(withReducer, withSaga, withConnect)(ReportShiftFrequency);
export { mapDispatchToProps };
