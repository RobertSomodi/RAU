import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Icon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';

const Unauthorized = (props) => {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Icon color="primary" className={classes.icon} />
        <Typography component="h1" variant="h5" className={classes.infoMessage}>
              You are not authorized to access this page.<br></br>Please contact your administrator
        </Typography>
      </div>

    </main>);
};

Unauthorized.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Unauthorized);
