import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectAuthUser } from 'containers/App/selectors';
import { makeSelectMenuState } from './selectors';
import { updateMenu } from './actions';
import reducer from './reducer';
import saga from './saga';
import Admin from './Admin';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  auth_user: makeSelectAuthUser(),
  menu_state: makeSelectMenuState()
});

const mapDispatchToProps = (dispatch) => ({
  updateMenu: (id) => dispatch(updateMenu(id))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'admin', saga });

export default compose(withReducer, withSaga, withConnect)(Admin);
export { mapDispatchToProps };
