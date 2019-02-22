import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectAuthUser } from 'containers/App/selectors';
import { getGroups } from './actions';
import reducer from './reducer';
import saga from './saga';
import Groups from './Groups';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  auth_user: makeSelectAuthUser(),
});

const mapDispatchToProps = (dispatch) => ({
  getGroups: (offset, pagination) => dispatch(getGroups(offset, pagination)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'groups', reducer });
const withSaga = injectSaga({ key: 'groups', saga });

export default compose(withReducer, withSaga, withConnect)(Groups);
export { mapDispatchToProps };
