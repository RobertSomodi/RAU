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
      edit: 'view'
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  async componentWillMount() { 
    if(this.props.match.path.indexOf('edit') != -1) {
      this.setState({action:'edit'}); 
    }
    if(this.props.match.path.indexOf('add') != -1) {
      this.setState({action:'add'}); 
    }
    if(this.props.match.path.indexOf('view') != -1) {
      this.setState({action:'view'}); 
    }
    if(this.state.action != 'add') {
      await this.props.getUserById(this.props.match.params.id);
    }
  }

  async componentDidUpdate(prevProps) {
    if(this.props.user.storeId && prevProps.user.storeId != this.props.user.storeId) {
      await this.props.getDepartmentsByStoreId(this.props.user.storeId);
    }
    if(this.props.user.departmentId && prevProps.user.departmentId != this.props.user.departmentId) {
      await this.props.getTeamsByDepartmentId(this.props.user.departmentId);
    }
  }

  handleChange = async (event) => {
    const userDetails = Object.assign({}, this.props.user);
    userDetails[event.target.name] = event.target.value;
    if(event.target.name == 'storeId') {
      userDetails['departmentId'] = 0;
      userDetails['teamId'] = 0;
    }
    if(event.target.name == 'departmentId') {
      userDetails['teamId'] = 0;
    }

    this.props.onUserDetailsChange(userDetails);
  }

  async onSave() {
    switch(this.state.action) {
      case 'edit':
        await this.props.onEdit();
        break;
      case 'add':
        await this.props.onAdd();
        break;
      default: break;  
    }
    this.context.router.history.push(`/admin/users`);
    
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Manage User</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        {(this.props.user.id || this.state.action =='add') && this.props.info && 
          <UserForm
          userDetails={this.props.user}
          handleChange={this.handleChange}
          onSave={this.onSave}
          departments={this.props.departments}
          teams={this.props.teams}
          info={this.props.info}
          action={this.state.action}
        />
        }
      </div>
    );
  }
}

ManageUser.propTypes = {
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onUserDetailsChange: PropTypes.func,
  getUserById: PropTypes.func.isRequired,
  getDepartmentsByStoreId: PropTypes.func.isRequired,
  getTeamsByDepartmentId: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  departments: PropTypes.array,
  teams: PropTypes.array,
  info: PropTypes.object
};
