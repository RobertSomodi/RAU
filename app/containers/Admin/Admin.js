/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Drawer from 'components/Drawer';
import AppBar from 'components/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import DashboardPage from 'containers/DashboardPage';
// import UserPage from 'containers/Admin/UsersPage';
import ManageUser from 'containers/Admin/ManageUser';
import { styles } from './styles';

class Admin extends React.PureComponent {
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
      open: true
    };
    this.handleDrawerState = this.handleDrawerState.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  handleDrawerState() {
    this.setState({ open: !this.state.open });
  }

  handleRouteChange(route) {
    this.context.router.history.push(`${this.props.match.path}/${route}`);
  }

  render() {
    const { path } = this.props.match;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Admin</title>
          <meta name="description" content="Admin" />
        </Helmet>
        <CssBaseline />
        <AppBar open={this.state.open} handleDrawerState={this.handleDrawerState}></AppBar>
        <Drawer open={this.state.open} handleDrawerState={this.handleDrawerState} handleRouteChange={this.handleRouteChange}></Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path={`${path}`} component={DashboardPage} />
            <Route path={`${path}/users`} component={ManageUser} />
            <Route path={`${path}/user`} component={ManageUser} />
            <Route path={`${path}/user:id`} component={ManageUser} />
          </Switch>
        </main>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(Admin);
