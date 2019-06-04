import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import { onDelete } from './actions';
import { getInfo } from 'containers/Admin/actions';
import reducer from './reducer';
import saga from './saga';
import Shifts from './Shifts';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  info: makeSelectInfo()
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    return new Promise((resolve, reject) => {
      dispatch(onDelete(id));
      setTimeout(() => {resolve();}, 2000);
    });
  },
  getInfo: () => {
    return new Promise((resolve, reject) => {
      dispatch(getInfo());
      setTimeout(() => {resolve();}, 2000);
    });
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'shifts', reducer });
const withSaga = injectSaga({ key: 'shifts', saga });

export default compose(withReducer, withSaga, withConnect)(Shifts);
export { mapDispatchToProps };
