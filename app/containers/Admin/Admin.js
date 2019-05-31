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
import Users from 'containers/Admin/Users';
import Schedule from 'containers/Schedule';
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
      open: true,
      menu_state: {}
    };
    this.handleDrawerState = this.handleDrawerState.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.handleSubmenuState = this.handleSubmenuState.bind(this);
  }

  handleDrawerState() {
    this.setState({ open: !this.state.open });
  }

  handleRouteChange(route) {
    if (route === 'logout') {
      this.props.logout().then(() => {
        localStorage.removeItem('userInfo');
        this.context.router.route.location = '/';
        this.context.router.history.push('/authentication');
      });
    } else {
      this.context.router.history.push(`${this.props.match.path}/${route}`);
    }
  }

  handleSubmenuState(id) {
    const clone = Object.assign({}, this.state.menu_state);
    clone[id] = !clone[id];
    this.setState({ menu_state: clone });
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
        <Drawer
          userRole="admin"
          open={this.state.open}
          handleDrawerState={this.handleDrawerState}
          handleRouteChange={this.handleRouteChange}
          handleSubmenuState={this.handleSubmenuState}
          menuState={this.state.menu_state}
        >
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path={`${path}`} component={DashboardPage} />
            <Route path={`${path}/users`} component={Users} />
            <Route path={`${path}/user`} component={ManageUser} />
            <Route path={`${path}/user:id`} component={ManageUser} />
            <Route path={`${path}/schedule`} component={Schedule} />
          </Switch>
        </main>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default withStyles(styles)(Admin);
