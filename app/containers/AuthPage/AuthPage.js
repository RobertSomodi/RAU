/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Authentication from '../../components/Authentication';

export default class AuthPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {
        email: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth_user) {
      localStorage.setItem('userInfo', JSON.stringify(nextProps.auth_user));
      if (nextProps.auth_user.role === 'admin') {
        this.context.router.history.push('/admin');
      } else {
        this.context.router.history.push('/');
      }
    }
  }

  handleChange = (event) => {
    const loginDetails = Object.assign({}, this.state.loginDetails);
    loginDetails[event.target.id] = event.target.value;
    this.setState({ loginDetails });
    this.props.onCredentialsChange(loginDetails);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Authentication</title>
          <meta name="description" content="Authentication page" />
        </Helmet>
        <Authentication handleChange={this.handleChange} loginDetails={this.state.loginDetails} onLogin={this.props.onLogin} />
      </div>
    );
  }
}

AuthPage.propTypes = {
  onLogin: PropTypes.func,
  onCredentialsChange: PropTypes.func,
  auth_user: PropTypes.object
};
