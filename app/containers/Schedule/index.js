import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import SchedulePage from './SchedulePage';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = () => ({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'schedule', reducer });
const withSaga = injectSaga({ key: 'schedule', saga });

export default compose(withReducer, withSaga, withConnect)(SchedulePage);
export { mapDispatchToProps };
