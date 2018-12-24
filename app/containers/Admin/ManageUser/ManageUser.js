/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import UserForm from 'components/UserForm';

export default class ManageUser extends React.PureComponent {
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
      userDetails: {
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange = (event) => {
    const userDetails = Object.assign({}, this.state.userDetails);
    userDetails[event.target.name] = event.target.value;
    this.setState({ userDetails });
    this.props.onUserDetailsChange(userDetails);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Manage User</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        <UserForm
          userDetails={this.state.userDetails}
          handleChange={this.handleChange}
          onSave={this.props.onSave}
        />
      </div>
    );
  }
}

ManageUser.propTypes = {
  onSave: PropTypes.func,
  onUserDetailsChange: PropTypes.func,
};
