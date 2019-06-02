import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { onEdit, onAdd, onStoreDetailsChange } from './actions';
import { makeSelectStore } from './selectors';
import { makeSelectInfo } from 'containers/Admin/selectors';
import reducer from './reducer';
import saga from './saga';
import ManageStore from './ManageStore';

const mapDispatchToProps = (dispatch) => ({
  onEdit: () => (new Promise((resolve, reject) => {
    dispatch(onEdit());
    setTimeout(() => {resolve()}, 2000);
  })),
  onAdd: () => (new Promise((resolve, reject) => {
    dispatch(onAdd());
    setTimeout(() => {resolve()}, 2000);
  })),
  onStoreDetailsChange: (store) => { dispatch(onStoreDetailsChange(store)); },
});


const mapStateToProps = createStructuredSelector({
  info: makeSelectInfo(),
  store: makeSelectStore()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'manage_store', reducer });
const withSaga = injectSaga({ key: 'manage_store', saga });

export default compose(withReducer, withSaga, withConnect)(ManageStore);
export { mapDispatchToProps };
