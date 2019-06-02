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
    onDelete,
    onEdit,
    onView,
    objectId
  } = props;

  return (
    <React.Fragment>
      <IconButton className={classes.button} aria-label="View" onClick={()=>{onView(objectId)}}>
        <InfoIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Edit" onClick={()=>{onEdit(objectId)}}>
        <EditIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Delete" onClick={()=>{onDelete(objectId)}}>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  );
};

TableButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  objectId: PropTypes.number
};

export default withStyles(styles)(TableButtons);
