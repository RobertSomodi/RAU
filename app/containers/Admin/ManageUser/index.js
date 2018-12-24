import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { signUp, onUserDetailsChange } from './actions';
import reducer from './reducer';
import saga from './saga';
import ManageUser from './ManageUser';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
  onSave: () => dispatch(signUp()),
  onUserDetailsChange: (user) => { dispatch(onUserDetailsChange(user)); }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'manage_user', reducer });
const withSaga = injectSaga({ key: 'manage_user', saga });

export default compose(withReducer, withSaga, withConnect)(ManageUser);
export { mapDispatchToProps };
