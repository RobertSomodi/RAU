import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectAuthUser } from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import Admin from './Admin';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  auth_user: makeSelectAuthUser()
});

const mapDispatchToProps = () => ({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'admin', saga });

export default compose(withReducer, withSaga, withConnect)(Admin);
export { mapDispatchToProps };
