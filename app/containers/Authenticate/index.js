import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading, makeSelectAuthUser } from 'containers/App/selectors';

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  authUser: makeSelectAuthUser()
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  redirect: () => push('/authentication'),
  unauthorized: () => push('unauthorized'),
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default function (ComposedComponent, role) {
  class Authenticate extends React.PureComponent {
    componentDidMount() {
      this.checkAndRedirect();
    }

    componentDidUpdate() {
      this.checkAndRedirect();
    }

    checkAndRedirect() {
      const { authUser, redirect, unauthorized } = this.props;
      if (!authUser) {
        redirect();
      } else if (authUser.data.roleId !== role) {
        unauthorized();
      }
    }
    render() {
      return (
        <React.Fragment>
          { this.props.authUser ? <ComposedComponent {...this.props} /> : null }
        </React.Fragment>
      );
    }
  }

  Authenticate.propTypes = {
    authUser: PropTypes.object,
    redirect: PropTypes.func.isRequired,
    unauthorized: PropTypes.func.isRequired
  };
  return compose(withConnect)(Authenticate);
}

