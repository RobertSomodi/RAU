/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import EnhancedTable from 'components/EnhancedTable';
import TableButtons from 'components/TableButtons';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

class Users extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.onView = this.onView.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  async componentWillMount() {
    await this.props.getUsers();
  }

  onAdd() {
    this.context.router.history.push(`/admin/users/add/`);
  }

  onView(id) {
    this.context.router.history.push(`/admin/users/view/${id}`);
  }

  async onDelete(id) {
    await this.props.onDelete(id);
    await this.props.getUsers();
    this.forceUpdate();
  }

  onEdit(id) {
    this.context.router.history.push(`/admin/users/edit/${id}`);
  }

  generateRows() {
    let rows = [];
    this.props.users.forEach((user, index) => {
      rows[index] = [];
      rows[index].push(user.lastName);
      rows[index].push(user.firstName);
      rows[index].push(this.getName('stores',user.storeId));
      rows[index].push(this.getName('departments',user.departmentId));
      rows[index].push(this.getName('teams',user.teamId));
      rows[index].push(this.getName('roles',user.roleId));
      rows[index].push(this.getName('positions',user.positionId));
      rows[index].push(
      <TableButtons
         key={`user${user.id}`}
         objectId={user.id}
         onView={this.onView}
         onDelete={this.onDelete}
         onEdit={this.onEdit}
      />);
    });
    return rows;
  }

  getName(key, value) {
    let data = this.props.info[key].find((obj) => {
      return obj.id = value;
    });
    return data ? data.name : '';
  }

  render() {
    if(this.props.info && Object.keys(this.props.info).length > 0){
      let rows = this.generateRows();
      return (
        <div>
          <Helmet>
            <title>Users</title>
            <meta name="description" content="Admin" />
          </Helmet>
          <CssBaseline />
          <Button variant="contained" color="primary" onClick={(ev) => {this.onAdd()}} className={this.props.classes.button}>
            Add user
          </Button>
          {rows.length > 0 &&
          <EnhancedTable
            tableName="Users"
            initialData={rows}
            rows={[
            {
              id: 'last_name', numeric: false, disablePadding: false, label: 'Last name'
            },
              {
              id: 'first_name', numeric: false, disablePadding: false, label: 'First name'
            },
            {
              id: 'store', numeric: false, disablePadding: false, label: 'Store'
            },
            {
              id: 'department', numeric: false, disablePadding: false, label: 'Department'
            },
            {
              id: 'team', numeric: false, disablePadding: false, label: 'Team'
            },
            {
              id: 'role', numeric: false, disablePadding: false, label: 'Role'
            },
            {
              id: 'position', numeric: false, disablePadding: false, label: 'Position'
            },
            {
              id: 'actions', numeric: false, disablePadding: false, label: 'Actions'
            }
          ]}
          />
        }
        </div>
      );
    } else {
      return (
        <div>
          <Helmet>
            <title>Users</title>
            <meta name="description" content="Admin" />
          </Helmet>
          </div>
      )
    }
    
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array,
  info: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);