import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create';
import InfoIcon from '@material-ui/icons/Info';

import { styles } from './styles';

const TableButtons = (props) => {
  const {
    classes,
  } = props;

  return (
    <React.Fragment>
      <IconButton className={classes.button} aria-label="View">
        <InfoIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Edit">
        <EditIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  );
};

TableButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableButtons);
