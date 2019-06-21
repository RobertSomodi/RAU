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
import Stores from 'containers/Admin/Stores';
import Positions from 'containers/Admin/Positions';
import Departments from 'containers/Admin/Departments';
import Teams from 'containers/Admin/Teams';
import Shifts from 'containers/Admin/Shifts';
import Schedule from 'containers/Admin/Schedule';
import ReportShiftFrequency from 'containers/Admin/ReportShiftFrequency';
import ReportClocking from 'containers/Admin/ReportClocking';
import ManageUser from 'containers/Admin/ManageUser';
import ManageStore from 'containers/Admin/ManageStore';
import ManagePosition from 'containers/Admin/ManagePosition';
import ManageDepartment from 'containers/Admin/ManageDepartment';
import ManageTeam from 'containers/Admin/ManageTeam';
import ManageShift from 'containers/Admin/ManageShift';
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

  async componentDidMount() {
    await this.props.getInfo();
    // this.forceUpdate();
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
            {/* <Route exact path={`${path}`} component={DashboardPage} /> */}
            <Route exact path={`${path}/`} component={Schedule} />
            <Route exact path={`${path}/users`} component={Users} />
            <Route path={`${path}/users/add/`} component={ManageUser} />
            <Route path={`${path}/users/edit/:id`} component={ManageUser} />
            <Route path={`${path}/users/view/:id`} component={ManageUser} />
            <Route exact path={`${path}/stores`} component={Stores} />
            <Route path={`${path}/stores/add/`} component={ManageStore} />
            <Route path={`${path}/stores/edit/:id`} component={ManageStore} />
            <Route path={`${path}/stores/view/:id`} component={ManageStore} />
            <Route exact path={`${path}/positions`} component={Positions} />
            <Route path={`${path}/positions/add/`} component={ManagePosition} />
            <Route path={`${path}/positions/edit/:id`} component={ManagePosition} />
            <Route path={`${path}/positions/view/:id`} component={ManagePosition} />
            <Route exact path={`${path}/departments`} component={Departments} />
            <Route path={`${path}/departments/add/`} component={ManageDepartment} />
            <Route path={`${path}/departments/edit/:id`} component={ManageDepartment} />
            <Route path={`${path}/departments/view/:id`} component={ManageDepartment} />
            <Route exact path={`${path}/teams`} component={Teams} />
            <Route path={`${path}/teams/add/`} component={ManageTeam} />
            <Route path={`${path}/teams/edit/:id`} component={ManageTeam} />
            <Route path={`${path}/teams/view/:id`} component={ManageTeam} />
            <Route exact path={`${path}/shifts`} component={Shifts} />
            <Route path={`${path}/shifts/add/`} component={ManageShift} />
            <Route path={`${path}/shifts/edit/:id`} component={ManageShift} />
            <Route path={`${path}/shifts/view/:id`} component={ManageShift} />
            <Route exact path={`${path}/shift-frequency`} component={ReportShiftFrequency} />
            <Route exact path={`${path}/clocking`} component={ReportClocking} />
          </Switch>
        </main>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getInfo: PropTypes.func.isRequired
};

export default withStyles(styles)(Admin);
