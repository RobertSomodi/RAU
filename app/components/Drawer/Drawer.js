import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { adminMenu, userMenu } from '../../constants/menu';
import { styles } from './styles';


class DrawerNav extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.submenuState);
  }


  buildMenu(menu) {
    return menu.map((item) => {
      if (item.submenu) {
        return (
          <React.Fragment>
            <ListItem key={item.order + item.name} button onClick={() => (this.props.handleSubmenuState(item.order))}>
              {(item.icon) && (
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>)}

              <ListItemText inset primary={item.name} />
              {this.props.submenuState[item.order] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse className={this.props.classes.collapse} in={this.props.submenuState[item.order]} timeout="auto" unmountOnExit>
              <List className={this.props.classes.list}>
                {this.buildMenu(item.submenu.sort((itemA, itemB) => (itemA - itemB)))}
              </List>
            </Collapse>
          </React.Fragment>
        );
      }
      return (
        <ListItem key={item.order + item.name} button onClick={() => (this.props.handleRouteChange('users'))}>
          {(item.icon) && (
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>)}
          <ListItemText primary={item.name} />
        </ListItem>);
    });
  }
  render() {
    const {
      userRole, open, classes, handleDrawerState
    } = this.props;
    const currentMenu = (userRole === 'admin') ? adminMenu : userMenu;

    const upperMenu = currentMenu
      .filter((item) => item.position === 'top')
      .sort((itemA, itemB) => (itemA.order - itemB.order));

    const lowerMenu = currentMenu
      .filter((item) => item.position === 'bottom')
      .sort((itemA, itemB) => (itemA.order - itemB.order));
    return (
      <React.Fragment>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerState}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.menuWrapTop}>
            <Divider />
            <List>
              {this.buildMenu(upperMenu)}
            </List>
          </div>
          <div className={classes.menuWrapBottom}>
            <Divider />
            <List>
              {this.buildMenu(lowerMenu)}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

DrawerNav.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerState: PropTypes.func.isRequired,
  handleRouteChange: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
  handleSubmenuState: PropTypes.func.isRequired,
  submenuState: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerNav);
